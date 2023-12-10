import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Login from './parts/login';
import Signup from './parts/Signup';
import './App.css'
import Main from './parts/Main';
import { useEffect } from 'react';
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Main/>}/>
    </Route>
  )
)

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
          <Main/>
      </RouterProvider>
    </>
  )
}

export default App
