export async function totalPost() {
  const url = "http://localhost:3000";
  const res = await fetch(url + "/api/count/total-posts", {
    cache: "no-store",
  });
  const data = await res.json();

  return data.totalPosts;
}

export async function totalCategories() {
  const url = "http://localhost:3000";
  const res = await fetch(url + "/api/count/total-categories", {
    cache: "no-store",
  });
  const data = await res.json();

  return data.totalCategories;
}

export async function postsByCategories(id) {
  const url = "http://localhost:3000";
  const res = await fetch(url + "/api/count/bycategory/" + id, {
    cache: "no-store",
  });
  const data = await res.json();

  return data.totalPosts;
}
