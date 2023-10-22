"use client";
import AdminCategory from "@/components/AdminCategory";
import { useEffect, useState } from "react";
import AdminCategories from "./AdminCategories";

export default function AllCategories({ data }) {

  return (
    <>
      <AdminCategories data={data} />
    </>
  );
}
