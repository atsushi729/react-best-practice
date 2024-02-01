import React, { useEffect, useState } from "react";

const BlogPost = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/post/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  /**
   * Problem
   * We get error at jsx elements.
   *
   * Cause
   * useEffect is called after rendering jsx, so post state is undefined.
   *
   * Solution -> after.jsx
   *
   */
  // return (
  //   <article>
  //     <h1>{post.title}</h1>
  //     <p>{post.body}</p>
  //   </article>
  // );
};

export default BlogPost;
