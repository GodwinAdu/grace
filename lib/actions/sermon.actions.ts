"use server"

import { auth } from "@clerk/nextjs/server";
import { connectToDatabase } from "../mongoose";
import User from "../models/user.models";
import Sermon from "../models/sermon.models";
import { revalidatePath } from "next/cache";
import { handleError } from "../utils";

interface CreateSermonProps {
    sermon: {
        sermonTopic: string;
        title: string;
        imageUrl: string;
        bible: string[];
        sermonBody: string;
        tags: string[];
        publishDate: Date;
    },
    path: string
}
export async function createSermon({ sermon, path }: CreateSermonProps) {
    try {
        const { sermonTopic, title, imageUrl, bible, sermonBody, tags, publishDate } = sermon
        const { userId } = auth()
        await connectToDatabase();

        const user = await User.findOne({ clerkId: userId });

        if (!user) throw new Error("User not found");

        const data = new Sermon({
            sermonTopic,
            title,
            imageUrl,
            bible,
            sermonBody,
            author: user?._id,
            tags,
            publishDate,

        })

        const value = await data.save();
        user.sermons.push(value?._id);
        await user.save();

        revalidatePath(path);

    } catch (error) {
        console.log("Error creating sermon", error);
        throw error;
    }
}

export async function fetchSermons() {
    try {
        await connectToDatabase();
        const sermons = await Sermon.find({}).populate({ path: "author" });
        console.log(sermons)

        if (sermons.length <= 0) return [];

        return JSON.parse(JSON.stringify(sermons))

    } catch (error) {
        handleError(error);
        throw error;
    }
}



const populateSermon = (query: any) => {
    return query
      .populate({ path: 'author', model: User, select: '_id firstName lastName duty photo' })
  }
export async function getSermonById(sermonId: string) {
    try {
        await connectToDatabase()

        const sermon = await populateSermon(Sermon.findById(sermonId))

        if (!sermon) throw new Error('Sermon not found')

        return JSON.parse(JSON.stringify(sermon))
    } catch (error) {
        handleError(error)
    }
}


// UPDATE
export async function updateSermon({ sermonId, sermon, path }: any) {
    try {
        await connectToDatabase();

        const updatedSermon = await Sermon.findByIdAndUpdate(
            sermonId,
            { ...sermon},
            { new: true }
        )
        revalidatePath(path)

        return JSON.parse(JSON.stringify(updatedSermon))
    } catch (error) {
        handleError(error)
    }
}

// DELETE
export async function deleteSermon(sermonId: string) {
    try {
        await connectToDatabase()

        const deletedSermon = await Sermon.findByIdAndDelete(sermonId)

    } catch (error) {
        handleError(error)
    }
}