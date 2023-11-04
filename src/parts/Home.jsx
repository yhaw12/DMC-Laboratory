import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import dgiLogo from '../assets/dgi-clinics.png'


function Home() {


    // localStorage.setItem('token') = true
  return (
    <section className='w-full h-auto items-center'>
      <div className='w-full h-20 bottom-6 shadow-md flex items-center'>
        <img className='w-28' src={dgiLogo} alt="" />
      </div>
      <div className='flex items-center justify-between '>
        <Sidebar/> 
        <div>
          <Outlet/>
        </div>
      </div>

    </section>
  )
}

export default Home