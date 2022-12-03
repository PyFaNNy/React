import style from './Post.module.css'
import React from 'react';
function Post(props) {
  return (
    <div className={style.item}>
      <div>
        <img src="https://vjoy.cc/wp-content/uploads/2019/12/1c7217c3cc91762d1d6a0805f7fae9cf.jpg" />
        {props.message}
      </div>
      <span>Like</span>
    </div>
  )
}

export default Post;