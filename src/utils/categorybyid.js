export default async function CategoriesById(id) {
  const url = "http://localhost:3000";
  const res = await fetch(url + "/api/categories/" + id);
  const data = await res.json();

  return data.data;
}
