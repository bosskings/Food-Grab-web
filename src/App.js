import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import { Navbar } from "./pages/Navbar"
import { Merchantsignup } from "./pages/Merchantsignup"
import { Merchantlogin } from "./pages/Merchantlogin"
import { Dashboard } from './pages/Dashboard';
//fonts

import "./fonts/Sherika Black.ttf"
import "./fonts/Sherika Regular.ttf"
import "./fonts/Sherika Medium.ttf"
import "./fonts/Sherika Bold.ttf"
import "./fonts/Sherika ExtraBold.ttf"



function App() {
  return (
    <div >
    <Router>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/Merchantsignup'} element={<Merchantsignup />} />
        <Route path={'/Merchantlogin'} element={<Merchantlogin />} />
        <Route path={'/Dashboard'} element= { <Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
