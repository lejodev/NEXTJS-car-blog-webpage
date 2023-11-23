import { NextResponse } from "next/server";
import { databaseConnect } from "../../utils/db";
import User from "@/app/models/User";

export async function POST(req, res) {
    try {
        databaseConnect()
        const reqUser = await req.json()
        // const user = new User
        const newUser = new User(reqUser)
        const saveUser = await newUser.save()
        console.log(saveUser)
        return NextResponse.json({ "f": "f" })
    } catch (error) {
        console.log(error.code)
        if (error.code === 11000) {
            return NextResponse.json({ "message": "Duplicated username" }, { status: 400 })
        }
        return NextResponse.json({ "message": error }, { status: 400 })
    }
}

export async function GET() {
    
}