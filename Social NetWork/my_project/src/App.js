import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Dialogs from './Componets/Dialogs/Dialogs';
import Header from './Componets/Header/Header';
import Music from './Componets/Music/Music';
import Navbar from './Componets/Navbar/Navbar';
import News from './Componets/News/News';
import Profile from './Componets/Profile/Profile';
import Settings from './Componets/Settings/Settings';
function App() {
  return (
    <BrowserRouter>
      <div className="app-wraper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/music' element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
