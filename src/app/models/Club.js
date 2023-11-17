import { Schema, model, models } from "mongoose";

export const Club = Schema({
    name: {
        type: String,
        required: true
    },
    events: [{
        type: Schema.Types.ObjectId,
        ref: "Event"
    }],
    hosts: [{
        type: Schema.Types.ObjectId,
        ref: User
    }],
    members: [{
        type: Schema.Types.ObjectId,
        ref: User
    }]
})

export default models.Club || model("Club", Club);