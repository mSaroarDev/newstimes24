"use client"
import { errorToast, successToast } from "@/libs/ToastFunctions";
import { useFormik } from "formik";
import Image from "next/image"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminProfileEdit({propData}){

  const router = useRouter()
    
    const [imgUrl, setImgUrl] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);

    const {profile_id, full_name, gender, nid, address, mobile_no, profile_pic} = propData;


    useEffect(()=> {
      if(profile_pic){
        setImgUrl(profile_pic)
      }
    }, [profile_pic])

    const showError = (message) => errorToast(message);
    const showSuccess = (message) => successToast(message);

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
      return ""; 
    }
  };

    const formik = useFormik({
        initialValues: {
            profile_id: profile_id,
            full_name: full_name,
            gender: gender,
            nid: nid,
            address: address,
            mobile_no: mobile_no,
            profile_pic: profile_pic
        },

        onSubmit: async (values, {resetForm}) => {
          if (selectedImage) {
            const imgUrl = await imageUpload();
            values.profile_pic = imgUrl;
          }

            const res = await fetch("/api/edit-profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })

            if(res.status === 409){
                showError("Sorry! Data not updated.")
            }else if(res.status === 200){
                showSuccess("Profile Updated!")
                resetForm();
                router.replace("/admin/profile")
            }

            console.log(values)
        }
    })

    return (
      <>
        <div className="profile__card p-10 rounded-xl shadow-md">
          <div className="flex items-start justify-start gap-6 w-full">
            <div className="text-center w-1/4 flex flex-col items-center justify-start gap-5">
              <Image
                className="rounded-full ring-2 object-cover w-[150px] h-[150px]"
                src={imgUrl}
                width={150}
                height={150}
                alt="Profile"
              />

              <button
                type="button"
                onClick={() => document.getElementById("profile_pic").click()} // Trigger file input click when the button is clicked
                className="w-fit underline"
              >
                Select Profile Picture
              </button>

            </div>

            <div className="profile__details w-3/4">
              <h2 className="text-xl font-semibold mb-3">Edit Profile</h2>
              <hr className="mb-3" />

              {/* profile form */}
              <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
                <label htmlFor="full-name">Full Name</label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formik.values.full_name}
                  onChange={formik.handleChange}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-2xl"
                />
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" value={formik.values.gender} onChange={formik.handleChange} className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <label htmlFor="nid">National ID No</label>
                <input
                  type="text"
                  id="nid"
                  name="nid"
                  value={formik.values.nid}
                  onChange={formik.handleChange}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-2xl"
                />
                <label htmlFor="mobile">Mobile No</label>
                <input
                  type="text"
                  id="mobile_no"
                  name="mobile_no"
                  value={formik.values.mobile_no}
                  onChange={formik.handleChange}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                


            {/* <label htmlFor="post_img">Select an Image</label> */}
            <input
              type="file"
              id="profile_pic"
              name="profile_pic"
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
                setImgUrl(URL.createObjectURL(e.target.files[0])); // Display the selected image for preview
              }}

              style={{ display: "none" }} // Hide the default file input rendering
            />
              {/* {selectedImage && <p>Selected file: {selectedImage.name}</p>} */}


                <button
                  type="submit"
                  className="btn btn-active btn-neutral max-w-fit"
                >
                  Save Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}