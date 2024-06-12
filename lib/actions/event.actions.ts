"use server"

import { revalidatePath } from "next/cache";
import Event from "../models/event.models";
import { connectToDatabase } from "../mongoose";
import { auth } from "@clerk/nextjs/server";
import User from "../models/user.models";
import { handleError } from "../utils";
import { eventFormSchema } from '../validators';

interface CreateEvent {
    title: string;
    description: string;
    location: string;
    imageUrl: string;
    startDate: Date;
    endDate: Date;
    categories: string[];
    price?: string | undefined;
    isFree: boolean;
    url?: string | undefined;
}

interface Props {
    event: CreateEvent
    path: string;
}
export const createEvent = async ({ event, path }: Props): Promise<void> => {
    try {
        const { userId } = auth()
        const { title, description, location, imageUrl, startDate, endDate, categories, price, isFree, url } = event
        await connectToDatabase();

        const user = await User.findOne({ clerkId: userId });
        if (!user) throw new Error(`User not found to create event `);

        const existingEvent = await Event.findOne({ title, location, startDate, endDate });

        if (existingEvent) throw new Error("Event already exists");

        const data = new Event({
            organizer: user?._id,
            title,
            description,
            location,
            imageUrl,
            startDate,
            endDate,
            categories,
            price: price || 0,
            isFree,
            url: url || ''
        })

       const value = await data.save();
       user.events.push(value?._id);
       await user.save();

        revalidatePath(path);

    } catch (error) {
        console.error("Error creating event", error);
        throw error;
    }
}

export async function fetchEvents() {
    try {
        await connectToDatabase();
        const events = await Event.find({}).populate({ path: "organizer" });
        console.log(events)

        if (events.length <= 0) return [];

        return JSON.parse(JSON.stringify(events))

    } catch (error) {
        handleError(error);
        throw error;
    }
}

// GET ONE EVENT BY ID

const populateEvent = (query: any) => {
    return query
      .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
  }
export async function getEventById(eventId: string) {
    try {
        await connectToDatabase()

        const event = await populateEvent(Event.findById(eventId))

        if (!event) throw new Error('Event not found')

        return JSON.parse(JSON.stringify(event))
    } catch (error) {
        handleError(error)
    }
}

// UPDATE
export async function updateEvent({ userId, event, path }: any) {
    try {
        await connectToDatabase()

        // const eventToUpdate = await Event.findById(event._id)
        // if (!eventToUpdate || eventToUpdate.organizer.clerkId !== userId) {
        //     throw new Error('Unauthorized or event not found')
        // }

        const updatedEvent = await Event.findByIdAndUpdate(
            event._id,
            { ...event},
            { new: true }
        )
        revalidatePath(path)

        return JSON.parse(JSON.stringify(updatedEvent))
    } catch (error) {
        handleError(error)
    }
}

// DELETE
export async function deleteEvent(eventId: string) {
    try {
        await connectToDatabase()

        const deletedEvent = await Event.findByIdAndDelete(eventId)

    } catch (error) {
        handleError(error)
    }
}