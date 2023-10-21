import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

export default function BackToHomepageArrow() {
  return (
    <>
      <Link href={"/"}>
        <h3 className="back__home flex items-center gap-3 mb-6 font-semibold">
          <BsArrowLeftShort /> Back to Homepage
        </h3>
      </Link>
    </>
  );
}
