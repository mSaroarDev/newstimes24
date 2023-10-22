import NewsCard from "@/components/NewsCard";
import CategoriesById from "@/utils/categorybyid";
import ByCategory from "@/utils/bycategory";

export default async function ByCategoryPage({ params }) {
  const id = params.id;
  const category = await CategoriesById(id);
  const posts = await ByCategory(id);

  return (
    <div>
      
        <div className="py-7 bg-slate-100">
        <main className="pt-24"><h1 className="text-2xl font-bold">Home » {category.category_name}</h1></main>
        </div>

        <main className="my-10">
        <div className="all-news flex flex-wrap items-start justify-center grid-flow-row-dense gap-10">
        {posts.length > 0 ? (
            posts.map((post) => {
              return <NewsCard key={post.id} data={post} />;
            })
          ) : (
            <div className="text-center text-xl font-bold">No posts</div>
          )}
      </div>
        </main>
      
    </div>
  );
}
