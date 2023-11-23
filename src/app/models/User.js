import { Schema, model, models } from "mongoose";

export const User = new Schema({
    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
    // check if posts fit correctly here
})

export default models.User || model("User", User)