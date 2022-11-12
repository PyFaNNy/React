import style from './MyPosts.module.css'
import Post from './Post/Posts';
import React from 'react'

function MyPosts() {
    return (
        <div>
          My posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
            <Post messenge="Hi, how are you"/>
            <Post messenge="It's my first post"/>
          </div>
        </div>
    )
}

export default MyPosts;