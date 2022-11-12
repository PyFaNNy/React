import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import Dialogs from './Componets/Dialogs/Dialogs';
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile';
function App() {
  return (
    <BrowserRouter>
    <div className="app-wraper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route component={Dialogs}/>
        <Route component={Profile}/>
      </div>
    </div>
    </BrowserRouter>  
  );
}

export default App;
