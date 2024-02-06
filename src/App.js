import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import { Navbar } from "./pages/Navbar"
import { Merchantsignup } from "./pages/Merchantsignup"
import { Merchantlogin } from "./pages/Merchantlogin"

function App() {
  return (
    <div >
    <Router>
    <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/Merchantsignup'} element={<Merchantsignup />} />
        <Route path={'/Merchantlogin'} element={<Merchantlogin />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
