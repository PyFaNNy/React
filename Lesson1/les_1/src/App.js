import './App.css'
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/Navbar';
import Profile from './Componets/Profile/Profile';
function App() {
  return (
    <div className="app-wraper">
      <Header />
      <Navbar />
      <Profile/>
    </div>
  );
}

export default App;
