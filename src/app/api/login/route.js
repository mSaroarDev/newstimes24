import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { TokenCookie } from "@/utils/TokenCookie";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function POST(req, res) {
  const formData = await req.json();

  try {
    const user = await prisma.users.findUnique({
      where: {
        email: formData.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { msg: "failed", data: "user not found" },
        { status: 406 }
      );
    }

    // const passwordMatch = await bcrypt.compare(
    //   formData.password,
    //   user.password
    // );

    if (formData.password === user.password) {
      let Cookie = await TokenCookie(user.email, user.id);
      return NextResponse.json(
        { msg: "success", data: "login success" },
        { status: 200, headers: Cookie }
      );
    } else {
      return NextResponse.json(
        { msg: "failed", data: "invalid credentials" },
        { status: 401 }
      );
    }
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: err });
  }
}
