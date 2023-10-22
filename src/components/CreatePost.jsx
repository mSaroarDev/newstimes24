"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import getAllCategories from "@/utils/categories";
import { errorToast, successToast } from "@/libs/ToastFunctions";

export default function CreatePost({ userId }) {
  const { quill, quillRef } = useQuill();
  const [postContent, setPostContent] = useState("");
  const [categories, setCategories] = useState(null);

  // show toast
  const showError = (message) => errorToast(message);
  const showSuccess = (message) => successToast(message);

  // post image
  const [imgUrl, setImgUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // image to img URL
  const imageUpload = async () => {
    if (selectedImage) {
      const data = new FormData();
      data.append("file", selectedImage);
      data.append("upload_preset", "full_stack_blog");
      data.append("cloud_name", "ahnaf");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ahnaf/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const res2 = await res.json();
      setImgUrl(res2.url);
      return res2.url;
    } else {
      return ""; // Handle the case when no image is selected
    }
  };

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setPostContent(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getAllCategories();
      setCategories(categories);
    };

    fetchCategories();
  }, []);


  const formik = useFormik({
    initialValues: {
      post_title: "",
      post_excerpt: "",
      post_content: "",
      featured_image: imgUrl,
      created_by: userId,
      category_id: "",
    },

    onSubmit: async (values, { resetForm }) => {
      if (selectedImage) {
        const imgUrl = await imageUpload();
        values.featured_image = imgUrl;
      }

      const updatedValues = { ...values, post_content: postContent };
      
      try {
        const url = "http://localhost:3000"
        const res = await fetch(`${url}/api/create-post`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedValues)
        })

        if(!res.status === 200){
          showError("Post not created!")
        }else if(res.status === 200){
          showSuccess("Post create success!")
          resetForm();
          // setPostContent("");
          // setSelectedImage(null)
        }
      } catch (err) {
        showError("Something is wrong!")
      }
    },
  });

  return (
    <>
      <div className="admin__new__post w-full mt-10">
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            id="post_title"
            name="post_title"
            value={formik.values.post_title}
            onChange={formik.handleChange}
            placeholder="Type here"
            className="input input-bordered input-success w-full mt-2 mb-4"
          />
          <label htmlFor="title">Post Excerpt</label>
          <textarea
            id="post_excerpt"
            name="post_excerpt"
            value={formik.values.post_excerpt}
            onChange={formik.handleChange}
            className="textarea textarea-accent mt-2 mb-4 resize-none"
            placeholder="Write here"
          ></textarea>
          <label htmlFor="title">Post Content</label>
          <div className="textarea textarea-accent mt-2 mb-4 h-[400px] w-full overflow-hidden p-4">
            <div className="h-full w-full" ref={quillRef} />
          </div>
          <label htmlFor="title">Select Category</label>
          <select
            value={formik.values.category}
            id="category_id"
            name="category_id"
            onChange={formik.handleChange}
            className="select select-accent w-full max-w-xs mt-2 mb-4"
          >
            <option disabled defaultValue>
              Select a category
            </option>
            {categories &&
              categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                );
              })}
          </select>

          <label htmlFor="title">Featured Image</label>
          <input
            type="file"
            id="featured_image"
            name="featured_image"
            onChange={(e) => {
              setSelectedImage(e.target.files[0]);
              setImgUrl(URL.createObjectURL(e.target.files[0])); // Display the selected image for preview
            }}
            className="file-input file-input-bordered file-input-brandColor w-full max-w-xs mt-2 mb-4"
          />

          <button type="submit" className="btn btn-neutral max-w-xs my-7">Submit Post</button>
        </form>
      </div>
    </>
  );
}
