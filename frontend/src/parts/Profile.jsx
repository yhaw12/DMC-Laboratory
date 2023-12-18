import { useEffect, useState } from "react"
import { FaPlus, FaTimes } from "react-icons/fa"
import profileIcon from '../assets/profile-icon.png'
import axios from "axios";

function Profile() {
  const [open , setOpen] = useState(false);
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    file: 'File[1]'
  })

  const handleSubmit = () => {
    axios.post('https://localhost:3000/users', values)
    .then(()=>{
      setValues(data)
    })
    .then(err=> console.err)
  }

  const getUserInfo = () => {
    // ... logic to get user info ...
  }
  

  useEffect(() => {
    if (getUserInfo() === null) {
      setOpen(true);
    }
  }, []);

  const handlePopUp = () =>{
    setOpen(true)
  }
  
  return (
    <div className="w-full h-96 grid items-center px-10 mx-5 mt-16 text-black shadow-lg bg-slate-200 relative">
      <div className="bottom"><h1 className="text-center text-2xl">User Profile</h1></div>
      <main className={`h-72 inline-flex items-center justify-between relative ${open? 'opacity-20': ''}`}>
        <div className="absolute top-6 right-5 cursor-pointer "><FaPlus onClick={handlePopUp}/></div>
        <div className="w-3/4 ">
          <div className="w-full flex items-center py-2 mb-4 gap-10"><label className="w-1/5">Name:</label> <h2 className="w-4/5">Name asdjkda asd</h2></div>
          <div className="w-full flex items-center py-2 mb-4 gap-10"><label className="w-1/5">Adress:</label><h2 className="w-4/5">Address asdasdasdasdasdaadsd</h2></div>
          <div className="w-full flex items-center py-2 mb-4 gap-10"><label className="w-1/5">Phone:</label> <h2 className="w-4/5">Phone</h2></div>
          <div className="w-full flex items-center py-2 mb-4 gap-10"><label className="w-1/5">Email:</label><h2 className="w-4/5">Email</h2></div>
        </div>
        <div className="w-1/3 h-52">
          <img src={getUserInfo()=== null ? profileIcon : ''}/>
        </div>
      </main>
      {open && 
        <div className={`w-4/5 bg-slate-100 border pb-6 absolute`}>
          <div className="w-full flex items-center justify-between bottom-2 border mb-4 px-4 py-4"><h2 className="font-bold text-lg">Update Lab Information</h2> <FaTimes className="cursor-pointer" onClick={()=>setOpen(false)}/></div>
          <div className="w-full m-auto px-6">
            <div className="w-full flex items-center justify-between mb-8"><label>Name:</label> <input className="bg-transparent border px-2 py-1 w-80 active:border-transparent " type="text" placeholder="Enter your Name" onChange={(e)=>{..values, name: e.target.value}}/></div>
            <div className="w-full flex items-center justify-between mb-8"><label>Phone:</label> <input className="bg-transparent border px-2 py-1 w-80"type="text" placeholder="Enter your number"/></div>
            <div className="w-full flex items-center justify-between mb-8"><label>Email:</label> <input className="bg-transparent border px-2 py-1 w-80"type="text" placeholder="Enter your email"/></div>
            <div className="w-full flex items-center justify-between mb-8"><label>Lab Logo:</label> <input className="w-80" type="file" name="" id="profile" /></div>
            <div className="w-full flex items-center justify-between mb-8"><label>Address:</label> <text className=" w-80 h-16 bg-transparent border px-2 py-1"placeholder='Type your address'></text></div>
          </div>

          <div className="w-28 flex items-center justify-between gap-2 m-auto">
            <button className="w-1/2 px-2 py-1 bg-slate-600 rounded-sm " onClick={()=>setOpen(false)}>Close</button>
            <button className="w-16 px-2 py-1 bg-green-500 inline-flex items-center rounded-sm " onClick={handleSubmit}>Submit</button>
          </div>

        </div>

      }

    </div>
  )
}

export default Profile


