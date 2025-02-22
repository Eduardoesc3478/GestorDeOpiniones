import {  Schema, model } from "mongoose";

const commentSchema = new Schema({
    content: {  
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Publication",
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    }



});

export default model("Comment", commentSchema);