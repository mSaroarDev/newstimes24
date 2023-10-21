import {cookies} from "next/headers";
import { NextResponse } from "next/server";

// logout
export async function GET(req,res) {
    cookies().delete('token')
    return NextResponse.json(
        {status:true,message:"Request Completed"}
    )
}