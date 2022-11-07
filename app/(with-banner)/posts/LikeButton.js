'use client'
import { useState } from "react"



function LikeButton() {
  const [liked,setLiked]= useState(false)

  const handleClickLike =(e)=>{
    e.preventDefault();
    setLiked(!liked)
  }

  return (
    <button onClick={(e)=>handleClickLike(e)}>
      {liked ? '🤎' : '🤍'}
      </button>
  );
}

export default LikeButton