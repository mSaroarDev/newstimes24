"use client";
import { errorToast, successToast } from "@/libs/ToastFunctions";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export default function CreateCategory({ props }) {
  const userId = parseInt(props);
  const router = useRouter();

  const showError = (message) => errorToast(message);
  const showSuccess = (message) => successToast(message);

  console.log(typeof userId);

  const formik = useFormik({
    initialValues: {
      category_name: "",
      description: "",
      created_by: userId,
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch("/api/create-category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        console.log(values);

        if (!values.category_name) {
          showError("Category name is required..!");
        } else if (res.status === 200) {
          showSuccess("Category Created..!");
          resetForm();
          router.replace("/admin/categories");
        } else {
          showError("Failed to Create..!");
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
          <label htmlFor="title">Category Name</label>
          <input
            type="text"
            id="category_name"
            name="category_name"
            value={formik.values.category_name}
            onChange={formik.handleChange}
            placeholder="Type here"
            className="input input-bordered input-success w-full mt-2 mb-4"
          />
          <label htmlFor="title">Description</label>
          <textarea
            id="description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            className="textarea textarea-accent mt-2 mb-4"
            placeholder="Write here"
          ></textarea>
          <button type="submit" className="btn btn-neutral max-w-xs my-7">
            Create
          </button>
        </form>
      </div>
    </>
  );
}
