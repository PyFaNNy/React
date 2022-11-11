import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'

function Profile() {
    return (
    <div className={style.content}>
        <div>
          <img src='https://img.freepik.com/free-vector/perspective-japanese-street-neon-lights_52683-44988.jpg?w=2000' style={{ height: '250px', width: '100%' }} />
        </div>
        <div>
          ava + disc
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile;