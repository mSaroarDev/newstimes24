export default async function ByCategory(id) {
  const url = "http://localhost:3000";
  const res = await fetch(url + "/api/category/" + id);
  const data = await res.json();

  return data.data;
}
