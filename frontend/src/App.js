import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Home/>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component={Login}/>
          <Route path="/home" component={Home}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
