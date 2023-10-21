import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req, res) {
  const formdata = await req.json();
  formdata.otp = "0";

  // const hashedPassword = await bcrypt.hash(formdata.password1, 10);

  const prisma = new PrismaClient();

  try {
    const existEmail = await prisma.users.count({
      where: {
        email: formdata.email,
      },
    });

    if (existEmail > 0) {
      return NextResponse.json(
        {
          status: "mailExists",
          data: "duplicateEmail",
        },
        { status: 406 }
      );
    } else {
      const newuser = await prisma.users.create({
        data: {
          username: formdata.username,
          email: formdata.email,
          password: formdata.password1,
          otp: formdata.otp,
          profiles: {
            create: {
              full_name: "",
              gender: "",
              nid: "",
              mobile_no: "",
              address: "",
              profile_pic: "",
            },
          },
        },
      });
      return NextResponse.json(
        { msg: "success", data: newuser },
        { status: 200 }
      );
    }
  } catch (err) {
    return NextResponse.json({ status: "failed", data: err });
  }
}
