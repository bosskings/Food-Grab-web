import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const  [user, setUser]  = useState(()=>localStorage.getItem('token')? JSON.parse(localStorage.getItem('token')):null);

  return user ? <Outlet /> : <Navigate to="/Merchantlogin"/>;
};