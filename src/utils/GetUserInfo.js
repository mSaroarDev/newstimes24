import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GetUserId() {
  const headerList = headers();
  return headerList.get("id");
}

export async function UserProfileInfo() {
  const userId = await GetUserId();
  return await prisma.profiles.findUnique({
    where: {
      profile_id: parseInt(userId),
    },
  });
}

export async function UserInfo() {
  const userId = await GetUserId();
  return await prisma.users.findUnique({
    where: {
      id: parseInt(userId),
    },
  });
}
