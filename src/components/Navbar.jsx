"use client"
import getAllCategories from "@/utils/categories";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/categories", { cache: "no-store" });
        const data = await res.json();
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="shadow-md bg-base-100 w-full fixed z-30 top-0 px-5">
        <div className="navbar px-5 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={'/'}>হোমপেজ</Link>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link href={`/category/${category.id}`}>{category.category_name}</Link>
                  </li>
                ))}
                {/* <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a>About</a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link href={"/"} className="btn btn-ghost normal-case text-xl">NewsTimes24</Link>
          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle flex items-center">
              <Link href={"/login"}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="24px"
                width="24px"
              >
                <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z" />
              </svg>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
