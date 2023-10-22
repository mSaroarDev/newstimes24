export default async function PostById(id) {
  const url = "http://localhost:3000";
  const res = await fetch(url + "/api/posts/" + id, { cache: "no-store" });
  const data = await res.json();

  return data.data;
}
