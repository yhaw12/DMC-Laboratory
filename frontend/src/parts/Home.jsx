import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';


function Home() {

  const Open = true;
  return (
    <section  className='w-full h-screen flex justify-between'>
      <Sidebar/>
      <main className={`w-full flex flex-col justify-between top-0 dark:bg-black ${Open ? 'flex-grow h-8 ' : 'flex-shrink'}`}>
        <Navbar/>
        <div>
          <Outlet/>
        </div>
      </main>
      
      

    </section>
  )
}

export default Home