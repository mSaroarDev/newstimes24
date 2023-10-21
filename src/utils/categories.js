export default async function getAllCategories() {
  const baseurl = "http://localhost:3000";
  const res = await fetch(`${baseurl}/api/categories`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.data;
}
