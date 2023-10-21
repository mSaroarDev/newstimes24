export async function FetchAllPosts() {
  const url = "http://localhost:3000";
  const res = await fetch(url + "/api/posts", { cache: "no-store" });
  const data = await res.json();

  return data.data;
}
