import React from 'react';

const BlogList = ({ blogs }) => {
  return(
    blogs.map((blog) => {
    return (
      <div className="blog-list-container" key={blog.id}>
        <h1>{blog.title}</h1>
        <h2>{blog.content}</h2>
        <p>Written by {blog.author}</p>
      </div>
    )
    })
  )
}

export default BlogList;