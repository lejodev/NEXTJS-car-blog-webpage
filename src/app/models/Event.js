import { Schema, models, model } from "mongoose";

export const Event = Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        // This will be a location
        type: String
    },
    date: {
        type: Date
    }
})

export default models.Event || model("Event", Event)