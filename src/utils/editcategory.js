export default async function singleCategoryData(id) {
  const res = await fetch(`${process.env.API_URL}/api/categories/${id}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  return data.data;
}
