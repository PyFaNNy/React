import style from './MyPosts.module.css'
import Post from './Post/Posts';

function MyPosts() {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

        <Post messenge="Hi, how are you" />
        <Post messenge="It's my first post" />
      </div>
    </div>
  )
}

export default MyPosts;