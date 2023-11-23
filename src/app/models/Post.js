import { Schema, models, model } from "mongoose";

export const Post = Schema({
    title: {
        type: String
    },
    text: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, { timestamps: true })

export default models.Post || model("Post", Post)