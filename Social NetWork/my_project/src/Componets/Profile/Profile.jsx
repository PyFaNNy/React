import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
function Profile(props) {
    return (
      <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch} />
      </div>
    )
}

export default Profile;