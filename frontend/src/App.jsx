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
import ProtectedRoute from './parts/auth/ProtectedRoute';
import ResetPassword from './parts/auth/ResetPassword';
import PersonalInfoForm from './parts/pages/PersonalInfoForm';
// import LabTest from './parts/pages/labtest/LabTest';

 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/*" element={<ProtectedRoute><Home/></ProtectedRoute>}>
        <Route index='dashboard' element={<Dashboard/>}/>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users/:id" element={<Profile />} />
        <Route path="activities" element={<ActivitiesList />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="clients" element={ <CustomerDataTable/>} />
        <Route path="labtest" element={ <LabTest/>} />
        <Route path="client-register" element={ <PersonalInfoForm/>} />
        <Route path="upt" element={ <Upt/>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset" element={<ResetPassword />} />
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
