import GetUserEmail from "@/utils/GetUserInfo";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const loggedUser = await GetUserEmail();
    return NextResponse.json({ msg: "success", data: loggedUser });
  } catch (err) {
    return NextResponse.json({ msg: "error" });
  }
}
