import { GetUserId } from "@/utils/GetUserInfo";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req) {
  const formData = await req.json();
  const profile_id = formData.profile_id;

  try {
    const updatedProfile = await prisma.profiles.update({
      where: {
        profile_id: profile_id,
      },
      data: {
        full_name: formData.full_name,
        gender: formData.gender,
        nid: formData.nid,
        address: formData.address,
        mobile_no: formData.mobile_no,
        profile_pic: formData.profile_pic,
      },
    });

    return NextResponse.json(
      { msg: "success", data: updatedProfile },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { msg: "failed", data: updatedProfile },
      { status: 409 }
    );
  }
}
