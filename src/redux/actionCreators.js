export const ADD_BLOG = 'ADD_BLOG';

export const addBlog = (blog) => {
  return ({
    type: ADD_BLOG,
    payload: {id: blog.id, blog},
  })
}
