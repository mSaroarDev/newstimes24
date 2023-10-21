import AllPosts from "@/components/AllNews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="mt-20 max-w-6xl mx-auto p-5">
        <AllPosts />
      </div>
      <Footer />
    </>
  );
}
