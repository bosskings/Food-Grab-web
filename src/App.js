import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home"
import { Merchantsignup } from "./pages/Merchantsignup"
import { Merchantlogin } from "./pages/Merchantlogin"
import { Dashboard } from './pages/Dashboard';
import OrderPage from './pages/OrderPage';
import { MenuPage } from './pages/MenuPage';
import { WalletPage } from './pages/WalletPage';
import { SupportPage } from './pages/SupportPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { ProtectedRoute } from './ProtectedRoute';
import { ShopPage } from './pages/ShopPage';

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
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/Merchantsignup'} element={<Merchantsignup />} />
          <Route path={'/Merchantlogin'} element={<Merchantlogin />} />

          <Route element={<ProtectedRoute />}>
            <Route path={'/Dashboard'} element={<Dashboard />} />
            <Route path={'/order'} element={<OrderPage />} />
            <Route path={'/menu'} element={<MenuPage />} />
            <Route path={'/wallet'} element={<WalletPage />} />
            <Route path={'/support'} element={<SupportPage />} />
            <Route path={'/profile'} element={<ProfilePage />} />
            <Route path={"/settings"} element={<SettingsPage />} />
            <Route path={"/shop"} element={<ShopPage />}/>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
