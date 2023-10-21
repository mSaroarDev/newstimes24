"use client";
import AdminCategory from "@/components/AdminCategory";
import { useEffect, useState } from "react";

export default function AllCategories({ data }) {
  const [categories, setCategories] = useState("");

  useEffect(() => {
    setCategories(data);
  }, [data]);

  return (
    <>
      {categories &&
        categories.map((category) => {
          return <AdminCategory key={category.id} data={category} />;
        })}
    </>
  );
}
