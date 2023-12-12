import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Login from './parts/auth/Login'
import Signup from './parts/auth/Signup';
import './App.css'
import { useEffect } from 'react';
import Dashboard from './parts/Dashboard';
import Home from './parts/Home';

 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/*" element={<Home />}>
        <Route path="dashboard" element={<Dashboard />} />
        {/* <Route path="employees" element={<Employees />} />
        <Route path="clients" element={<Clients />} />
        <Route path="profile" element={<Profile />} />
        <Route path="upt" element={<Upt />} /> */}
      </Route>
      {/* <Route path='/' element={Main}/> */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
);


function App() {

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
      document.querySelector('html').classList.add(currentTheme);
    }
  }, []);

  return (
    <>
      <RouterProvider router={router}>
          {/* <Main/> */}
      </RouterProvider>
    </>
  )
}

export default App
