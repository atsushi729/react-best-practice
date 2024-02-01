"use client";
import React, { useEffect, useState } from "react";

//------------------------------------------
//  Comment
//------------------------------------------
// Issue:
// Even click button, it not fetch new data from server
//
// Cause
// useEffect only run at first mount.
//
// Proposed Solution:
// See 'after.jsx' for a more efficient approach.

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
  }, []);

  return <p>{text}</p>;
}

//------------------------------------------
//  Types
//------------------------------------------
type PostBodyProps = {
  id: number;
};
