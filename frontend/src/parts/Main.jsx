import Sidebar from "../components/Sidebar"
import Home from "./Home"


function Main() {
  return (
    <div className="w-full h-screen flex justify-between">
        <Sidebar/>
        <Home/>
    </div>
  )
}

export default Main