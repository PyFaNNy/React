import style from './MyPosts.module.css'
import Post from './Post/Posts';
import React from 'react'
function MyPosts() {

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>

        <Post messenge="Hi, how are you" />
        <Post messenge="It's my first post" />
      </div>
    </div>
  )
}

export default MyPosts;