import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile() {
    return (
    <div>
        <ProfileInfo />
        <MyPosts />
      </div>
    )
}

export default Profile;