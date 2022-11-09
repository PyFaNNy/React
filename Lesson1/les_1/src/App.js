import './App.css'

function App() {
  return (
    <div className="app-wraper">
      <header className="header">
        <img src="https://uploads.turbologo.com/uploads/design/hq_preview_image/4551835/draw_svg20211224-8647-1vc0v11.svg.png" />
      </header>
      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messanges</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://img.freepik.com/free-vector/perspective-japanese-street-neon-lights_52683-44988.jpg?w=2000' style={{height:'250px', width:'100%'}}/>
        </div>
        <div>
          ava + disc
        </div>
        <div>
          My posts
          <div>
            Posts
            <div>
              POST1
            </div>
            <div>
              POST2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
