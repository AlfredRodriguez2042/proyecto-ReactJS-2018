import React from 'react'
import Post from './Course'
import './courses-list.css'

const PostList = ( props ) => (
  <ul className="Post-List">
     {
      props.posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          poster={post.poster}
          amount={post.amount}
          cocinero={post.cocinero}
          date={post.date}
          categories={post.categories}
        />
      )).reverse()
    } 
    <Post/>
  </ul>
)

export default PostList