
import './App.css';
import { NavLink,Route,Routes } from 'react-router-dom';
import "./components/About";
import "./components/Home";
import "./components/Labs"
import Support from './components/Support';
import Home from './components/Home';
import About from './components/About';
import Labs from './components/Labs';
import NatFound from './components/NotFound';
import Mainheader from './components/Mainheader'; 
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Labs">Labs</NavLink>
          </li>
        </ul>
      </nav>


     <Routes>
     <Route path="/" element={<Mainheader/>} />
          {/* Default Route */}
          <Route index element={<Home/>} />
     <Route path='/suport' element={<Support/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/lab' element={<Labs/>}/>
     <Route path='*' element={<NatFound/>}/>
     </Routes>
    </div>
  );
}

export default App;
