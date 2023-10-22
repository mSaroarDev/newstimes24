"use client";
import { useEffect, useState } from "react";
import AdminCategoryCard from "./AdminCategory";
import { errorToast, successToast } from "@/libs/ToastFunctions";
import { postsByCategories } from "@/utils/count";

export default function AdminCategories({ data }) {
  const [categories, setCategories] = useState(null);
  const [totalPosts, setTotalPosts] = useState(0);

  const showError = (message) => errorToast(message);
  const showSuccess = (message) => successToast(message);

  useEffect(() => {
    const fetchData = async () => {
      setCategories(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {categories &&
        categories.map((category) => {
          return <AdminCategoryCard key={category.id} data={category} />;
        })}
    </>
  );
}
