import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
function Profile(props) {
    return (
      <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
      </div>
    )
}

export default Profile;