"use server"

import Feedback from "../models/feedback.models";
import { connectToDatabase } from "../mongoose";


interface FeedbackProps {
    name: string;
    email: string;
    message: string;
}
export async function createFeedback(value: FeedbackProps) {
    try {
        const { name, email, message } = value;
        await connectToDatabase();

        const newFeedback = new Feedback({
            name,
            email,
            message
        });

        await newFeedback.save();

    } catch (error) {
        console.log("Error creating feedback", error);
        throw error;
    }
}


export async function fetchAllFeedbacks() {
    try {
        await connectToDatabase();
        const feedbacks = await Feedback.find({});
        return JSON.parse(JSON.stringify(feedbacks));
    } catch (error) {
        console.log("Error fetching all feedbacks", error);
        throw error;
    }
}



export async function fetchFeedbackById(id: string) {
    try {
        await connectToDatabase();
        const feedback = await Feedback.findById(id);
        if (!feedback) throw new Error("Feedback not found");
        return JSON.parse(JSON.stringify(feedback));
    } catch (error) {
        console.log("Error fetching feedback by id", error);
        throw error;
    }
}
