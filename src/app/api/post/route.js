import { databaseConnect } from "@/app/utils/db"
import { NextResponse } from "next/server"
import Post from "@/app/models/Post"

export async function POST(request, { params }) {
    databaseConnect()
    const post = await request.json()
    const newPost = new Post(post)
    const savedPost = await newPost.save()
    console.log(savedPost)
    return NextResponse.json({ "msg": "good" })
}