"use client"
import Link from "next/link";
import BackToHomepageArrow from "./BackToHomepage";
import { useFormik } from "formik";
import { useState } from "react";
import Toast from './Toast'
import "react-toastify/dist/ReactToastify.css";
import { errorToast, successToast } from "@/libs/ToastFunctions";
import { useRouter } from "next/navigation";

export default function RegisterBox() {

  const router = useRouter();

  // toast notification
  const showError = (message) => errorToast(message);
  const showSuccess = (message) => successToast(message);

  const [error, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password1: "",
      password2: "",
    },

    onSubmit: async (values, {resetForm}) => {
      
      try {
        if(!values.username || !values.email || !values.password1 || !values.password2){
          setError("All fields are required...")
        }else if(values.password1 !== values.password2){
          setError("Password's don't matched...")
        }else{
          setError("")
          const res = await fetch("api/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
          });

          if(res.status === 406){
            showError("Email already exist!");
          }else if(res.status === 200){
            showSuccess("Registration Successfully Completed!")
            resetForm();
            setTimeout(()=>{
              router.push("/login")
            }, 2000)
          }else{
            console.log(res)
            showError("Something is wrong during the registration!");
          }
        }
      } catch (err) {
        console.log(err)
      }
    }


  })

  return (
    <>
      <div className="login__box p-10 border border-t-4 border-brandColor rounded-2xl flex flex-col w-[500px]">
        <BackToHomepageArrow />
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full">
          <h3 className="text-xl mb-5 font-semibold">Register</h3>
          <label htmlFor="Email" className="font-medium">
            Enter Username
          </label>
          <input
            type="text"
            placeholder="JohnSmith"
            className="my-2 input input-bordered max-w-full block"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <label htmlFor="Email" className="font-medium">
            Enter Email
          </label>
          <input
            type="text"
            placeholder="example@mail.com"
            className="my-2 input input-bordered max-w-full block"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label htmlFor="Email" className="font-medium mt-3">
            Password
          </label>
          <input
            type="password"
            placeholder="******"
            className="my-2 input input-bordered max-w-full"
            id="password1"
            name="password1"
            value={formik.values.password1}
            onChange={formik.handleChange}
          />
          <label htmlFor="Email" className="font-medium mt-3">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="******"
            className="my-2 input input-bordered max-w-full"
            id="password2"
            name="password2"
            value={formik.values.password2}
            onChange={formik.handleChange}
          />
          <div className="flex items-center justify-between">
          <button type="submit" className="bg-brandColor text-white rounded-md h-auto w-fit py-3 px-10">
            Register
          </button>
          {
            error && <p className="bg-red-500 text-white px-3 py-2 rounded-md text-xs w-fit block">
            {error}
          </p>
          }
          </div>
        </form>
        <div className="forgot__links text-right mt-6">
          <Link href={"/login"}>
            Already have an account? <span className="underline text-brandColor">Login now</span>
          </Link>
        </div>
      </div>


      {/* all toast notifications */}
      {/* success */}
      
      <Toast />

    </>
  );
}
