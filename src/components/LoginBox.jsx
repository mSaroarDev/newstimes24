"use client";
import Link from "next/link";
import BackToHomepageArrow from "./BackToHomepage";
import { useFormik } from "formik";
import { errorToast, successToast } from "@/libs/ToastFunctions";
import Toast from "./Toast";
import { useRouter } from "next/navigation";

export default function LoginBox() {
  const router = useRouter();

  // toast notification
  const showSuccess = (message) => successToast(message);
  const showErr = (message) => errorToast(message);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async (values) => {
      try {
        const res = await fetch("api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        });


        if(res.status === 401){
          console.log(res)
          showErr("Invalid credentials..!");
        }else if (res.status === 200) {
          console.log(res)
          showSuccess("Login Successfull!");
          setTimeout(() => {
            router.replace("/admin/dashboard");
          }, 2000);
        }

      } catch (err) {
        showErr("Invalid credentials..!");
      }
    },
  });

  return (
    <>
      
      <div className="login__box p-10 border border-t-4 border-brandColor rounded-2xl flex flex-col w-[400px]">
        <BackToHomepageArrow />
        <form onSubmit={formik.handleSubmit}>
          <h3 className="text-xl mb-5 font-semibold">Login</h3>
          <label htmlFor="Email" className="font-medium mt-3 block">
            Enter Email
          </label>
          <input
            type="text"
            placeholder="example@mail.com"
            className="my-3 input input-bordered w-full max-w-xs"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label htmlFor="Email" className="font-medium mt-3 block">
            Password
          </label>
          <input
            type="password"
            placeholder="******"
            className="my-2 input input-bordered w-full max-w-xs"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <button type="submit" className="bg-brandColor text-white rounded-md mt-3 h-auto w-fit py-3 px-10">
            Login
          </button>
        </form>
        <div className="forgot__links text-right mt-6">
          <Link href={"/register"}>
            Dont have an account?{" "}
            <span className="underline text-brandColor">Register now</span>
          </Link>
        </div>
      </div>
      <Toast />
    </>
  );
}
