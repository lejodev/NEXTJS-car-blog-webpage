import { Schema, models, model } from "mongoose";

export const Post = Schema({
    title: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date
    }
})

export default models.Post || models("Post", Post)