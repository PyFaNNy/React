import './App.css'
import Header from './Componets/Header';
import Navbar from './Componets/Navbar';
import Profile from './Componets/Profile';
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
