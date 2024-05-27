import { model, models, Schema } from "mongoose";


// Define the Sermon schema
const SermonSchema = new Schema({
    sermonTopic: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    bible: { type: [String], required: true },
    sermonBody: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    tags: { type: [String], required: true },
    publishDate: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

// Create the Sermon model
const Sermon = models.Sermon || model('Sermon', SermonSchema);

module.exports = Sermon;
