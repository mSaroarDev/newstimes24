export default async function AuthorsById(id) {
  const url = "http://localhost:3000";
  const res = await fetch(url + "/api/authors/" + id);
  const data = await res.json();

  return data.data;
}
