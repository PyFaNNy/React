import { Routes,Route } from 'react-router-dom';
import './App.css'
import Dialogs from './Componets/Dialogs/Dialogs';
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/dialogs'
            element={<Dialogs store={props.store} />} />

          <Route path='/profile'
            element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} 
            />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
