import { useSelector } from "react-redux";
import React from 'react'

const PostsList = () => {
  const posts = useSelector(state => state.posts)
  const renderedPosts = posts.map(post => (
    <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,50)}</p>
        </article>
    ))
  return (
    <div>
        <h2>Posts</h2>
        {renderedPosts}


    </div>
  )
}

export default PostsList