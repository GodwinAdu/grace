import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: {type: String, required: true },
  photo: { type: String, required: true },
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  sermons:[{ type: Schema.Types.ObjectId, ref:"Sermon"}],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
})

const User = models.User || model('User', UserSchema);

export default User;