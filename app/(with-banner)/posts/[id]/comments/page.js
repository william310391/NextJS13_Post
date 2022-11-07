import React from "react";
import Image from "next/image";

const fetchComments = async (id) => {

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  //return fetch("http://jsonplaceholder.typicode.com/posts", {cache:'no-store'})
  
  //throw new Error('Error al cargar los comentarios')
  return fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 10,
    },
  }).then((res) => res.json());
};

async function page({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{background:'#444',fontSize: '10px'}}>     
      {comments.map((comment) => (       
        <li key={comment.id}>
           <Image width='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/micah/${comment.email}.svg`}/>
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}

export default page;
