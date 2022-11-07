import React from "react";
import Link from "next/link";

const fetchSinglePost = (id) => {
  // return fetch("http://jsonplaceholder.typicode.com/posts", {cache:'no-store'})

  return fetch(`http://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json());
};

async function page({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver Comentarios</Link>
      {children}
    </article>
  );
}

export default page;
