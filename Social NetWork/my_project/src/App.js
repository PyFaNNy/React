import { Routes,Route } from 'react-router-dom';
import './App.css'
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile';
import React from 'react';
import DialogsContainer from './Componets/Dialogs/DialogsContainer';

function App(props) {
  return (
    <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
        <Routes>
            <Route path='/dialogs'
                   element={<DialogsContainer store={props.store} /> }/>

            <Route path='/profile'
                   element={<Profile store={props.store} /> }/>
        </Routes>
        </div>
    </div>
);
}

export default App;
