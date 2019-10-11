import { ADD_BLOG } from './actionCreators';

const initialState = {
  blogs:  {
    0: {
      title: 'This is the title.',
      author: 'Meg',
      email: 'm@m.com',
      content: 'This is a blog. I love writing blogs. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum sit quam? Velit impedit nisi culpa nobis, consequuntur qui doloribus voluptatum vel veniam quos, minima unde iure quam et aliquam?',
      id: 0,
    },
    1: {
      title: 'This is the title.',
      author: 'Meg', 
      email: 'm@m.com',
      content: 'This is a blog. I love writing blogs. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum sit quam? Velit impedit nisi culpa nobis, consequuntur qui doloribus voluptatum vel veniam quos, minima unde iure quam et aliquam?',
      id: 1,
    },
    2: {
      title: 'This is the title.',
      author: 'Meg', 
      email: 'm@m.com',
      content: 'This is a blog. I love writing blogs. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum sit quam? Velit impedit nisi culpa nobis, consequuntur qui doloribus voluptatum vel veniam quos, minima unde iure quam et aliquam?',
      id: 2,
    },
    3: {
      title: 'This is the title.',
      author: 'Meg', 
      email: 'm@m.com',
      content: 'This is a blog. I love writing blogs. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus earum sit quam? Velit impedit nisi culpa nobis, consequuntur qui doloribus voluptatum vel veniam quos, minima unde iure quam et aliquam?',
      id: 3,
    }
  }
}

export default function blogs(state = initialState, action) {
  switch(action.type) {
    case ADD_BLOG:
      return {
        ...state,
        blogs: {
          ...state.blogs,
          [action.payload.id]: action.payload.blog,
        }
      }
    default:
      return state;
  }
}
