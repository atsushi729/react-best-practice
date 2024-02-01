"use client";
import React, { useEffect, useState } from "react";

//------------------------------------------
//  Comment
//------------------------------------------
// Proposed Solution:
// Add id to dependency array to invoke new fetch function.

//------------------------------------------
//  Example code
//------------------------------------------
export default function Post() {
  const [id, setId] = useState(1);

  return (
    <>
      <button
        onClick={() => setId(Math.floor(Math.random() * 100))}
        className="bg-blue-500 px-4 py-2 text-white rounded mr-2"
      >
        show me a different post
      </button>
      <PostBody id={id} />
    </>
  );
}

export function PostBody({ id }: PostBodyProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setText(data.body));
  }, [id]); // Add id to dependency array to invoke useEffect.

  return <p>{text}</p>;
}

//------------------------------------------
//  Types
//------------------------------------------
type PostBodyProps = {
  id: number;
};
