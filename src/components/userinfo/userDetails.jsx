"use client"
import { useEffect, useState } from "react";

export default function UserDetails({ propData }) {
  const [data, setData] = useState(propData);

  useEffect(() => {
    // No need to fetch data, just set it based on propData
    setData(propData);
  }, [propData]); // Include propData as a dependency to trigger the effect when it changes

  return (
    <>
      <p><span className="font-semibold py-5">Address</span>: {data.address}</p>
      <p><span className="font-semibold py-5">Gender</span>: {data.gender}</p>
      <p><span className="font-semibold py-5">Mobile No</span>: +88{data.mobile_no}</p>
      <p><span className="font-semibold py-5">National ID No</span>: {data.nid}</p>
    </>
  );
}
