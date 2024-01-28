import React, { useEffect, useState } from "react";

// Define the type for your post
interface PostType {
  title: string;
  body: string;
}

const BlogPost = () => {
  const [post, setPost] = useState<PostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/post/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data as PostType);
        setLoading(false);
      });
  }, []);

  /***
   * Solution
   * Add new state to make sure post is correctlly store as state.
   */
  return (
    <article>
      {loading
        ? "loading ..."
        : post && (
            <>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </>
          )}
    </article>
  );
};

export default BlogPost;
