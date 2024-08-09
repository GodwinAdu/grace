import { auth } from "@clerk/nextjs/server";
import { connectToDatabase } from "../mongoose";
import { getUserById } from "../actions/user.actions";


export async function currentProfile() {
    try {
        const { userId } =  auth()

        if (!userId) return null;
        await connectToDatabase();

        const user = await getUserById(userId);

        if (!user) throw new Error("User not found ");

        return user;


    } catch (error) {
        console.error(error);
        throw error;
    }
}