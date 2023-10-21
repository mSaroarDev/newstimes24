"use client";
import { errorToast, successToast } from "@/libs/ToastFunctions";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditCategory({data}) {

  // const [categoryData, setCategoryData] = useState("");

  //  useEffect(()=>{
  //   setCategoryData(data)
  //  }, [data])


  const router = useRouter();

  const showError = (message) => errorToast(message);
  const showSuccess = (message) => successToast(message);


  const formik = useFormik({
    initialValues: {
      id: data.id,
      category_name: data.category_name,
      description: data.description,
    },
    
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("/api/edit-category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        

        if (!values.category_name) {
          showError("Category name is required..!");
        } else if (res.status === 200) {
          showSuccess("Category updated..!");
          resetForm();
          router.replace("/admin/categories");
        } else {
          showError("Failed to update..!");
        }
      } catch (err) {
        showError("Something wrong");
      }
    },
  });

  return (
    <>
      <div className="admin__new__post w-full mt-10">
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <label htmlFor="title">Category Name <span className="text-red-500 text-xs">(required)</span></label>
          <input
            type="text"
            id="category_name"
            name="category_name"
            value={formik.values.category_name}
            onChange={formik.handleChange}
            placeholder="Type here"
            className="input input-bordered input-success w-full mt-2 mb-4"
          />
          <label htmlFor="title">Description <span className="text-green-600 text-xs">(optional)</span></label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            className="textarea textarea-accent mt-2 mb-4"
            placeholder="Write here"
          ></textarea>
          <button type="submit" className="btn btn-neutral max-w-xs my-7">
            Update
          </button>
        </form>
      </div>
    </>
  );
}
