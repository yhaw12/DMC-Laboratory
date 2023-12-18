import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Login from './parts/auth/Login'
import Signup from './parts/auth/Signup';
import './App.css'
import { useEffect } from 'react';
import Dashboard from './parts/Dashboard';
import Home from './parts/Home';
import ActivitiesList from './parts/pages/ActivitiesList';
import Attendance from './parts/pages/Attendance';
import CustomerDataTable from './components/datatable/CustomerDataTable';
import LabTest from '../../frontend/src/parts/pages/labtest/LabTest';
import Upt from './parts/Upt';
import Profile from './parts/Profile';
// import LabTest from './parts/pages/labtest/LabTest';

 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/*" element={<Home />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user" element={<Profile />} />
        <Route path="activities" element={<ActivitiesList />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="clients" element={ <CustomerDataTable/>} />
        <Route path="labtest" element={ <LabTest/>} />
        <Route path="upt" element={ <Upt/>} />
        {/* <Route path="clients" element={<Clients />} />
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
