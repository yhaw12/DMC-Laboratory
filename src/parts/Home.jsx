import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import dgiLogo from '../assets/dgi-clinics.png'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <section className='w-full h-auto flex justify-between outline'>
      <div className='w-1/4'><Sidebar/></div>
      <div className='w-3/4 h-8 flex flex-row items-center'>
        <Navbar/>
        <div>
          <Outlet/>
        </div>
      </div>
    </section>
  )
}

export default Home
