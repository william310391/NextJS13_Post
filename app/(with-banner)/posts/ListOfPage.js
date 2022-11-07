import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = () => {
  // return fetch("http://jsonplaceholder.typicode.com/posts", {cache:'no-store'})

  return fetch("http://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json());
};

async function ListOfPage() {
  const posts = await fetchPosts();

  return (
    <section>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2 style={{ color: "#09f" }}>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton />
          </Link>
        </article>
      ))}
    </section>
  );
}

export default ListOfPage;
