import { NextResponse } from "next/server";
import { databaseConnect } from "@/app/utils/db";
import User from "@/app/models/User";

export async function GET(request, { params }) {
    try {
        databaseConnect()
        const USERID = params.userId
        const user = await User.findById(USERID)
        console.log(user)
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({ "Message": error })
    }
}

export async function PATCH(request, { params }) {
    try {
        databaseConnect()
        const userId = params.userId
        const update = await request.json()
        console.log("update",update)
        const user = await User.findByIdAndUpdate(userId, update, { new: true })
        console.log(user)
        return NextResponse.json({ user }, { status: 203 })
    } catch (error) {
        return NextResponse, json({ "Message": error }, { status: 400 })
    }
}