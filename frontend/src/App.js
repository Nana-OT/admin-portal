import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Members from './components/Members';
import Dashboard from './components/Dashboard'
import Singers from './components/Singers';
import SidePanel from './components/SidePanel';


function App() {
  return (
    <div>
      <BrowserRouter>
        <SidePanel/>
        <Routes>
          <Route path="/" exact component={<Login/>}/>
          <Route path="/home*" component={<Home/>}/>
          <Route path="/home/dashboard" element={<Dashboard/>}/>
          <Route path="/home/members" element={<Members/>}/>
          <Route path="/home/singers" element={<Singers/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
