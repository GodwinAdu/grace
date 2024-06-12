import {model, models,Schema } from "mongoose";



const EventSchema = new Schema({
    organizer:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    categories:{
        type:[String],
        required:true
    },
    price:{
        type:Number,
        default:'0'
    },
    isFree:{
        type:Boolean,
        default:false,
    },
    url:{
        type:String,
       
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updateAt:{
        type:Date,
        default:Date.now
    }
})


const Event = models.Event || model("Event",EventSchema)

export default Event;