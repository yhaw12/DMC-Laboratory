import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component'
import { FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";



function CustomerDataTable() {

   const columns =[
    {
      name: 'ID',
      selector: row=>row.id
    },
    {
      name: 'NAME',
      selector: row=>row.name
    },
    {
      name: 'EMAIL',
      selector: row=>row.email
    },
    {
      name: 'CITY',
      selector: row=>row.address.city
    },
    {
      name : 'ACTIONS',
      cell: row => <div>
        <button className="bg-[#0c6b79] rounded-sm p-2 mr-2" onClick={()=>deletePopUp(row.id)}>Print Report</button>
        <button className="bg-red-500 rounded-sm p-2" onClick={()=>deletePopUp(row.id)}><FaTrash/></button>
        </div> 
    }
   ]

//    PULL CLIENTS DA
        function UserData(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
              setRecords(res.data);
              // console.log(res.data)
              setFilterItems(res.data)
            })
            .catch(err=>console.log(err))
        }

        useEffect(()=>{
          UserData();
        },[])
      

    const [records, setRecords] = useState([])
    const [filterItems, setFilterItems] = useState([])

    // FILTER CLIENTS DATA
    const handleFilter=(e)=>{
      const newData = filterItems.filter(row=>row.name.toLowerCase().includes(e.target.value));
      setRecords(newData)
    }

    const {id} = useParams();


    // DELETE CLIENTS DATA
    const handleDelete = ()=>{
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        const updateRecords = records.filter(row=>row.id !== id);
        setRecords(updateRecords);
        setFilterItems(updateRecords);
      })
      .catch(err=>console.log(err))
    }

    // DELET CONFIRMATION

    const [popUp, setPopUp] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const deletePopUp = (id) => {
      setPopUp(true);
      setDeleteId(id);
    }

    const handleConfirmDelete = () => {
      handleDelete(deleteId);
      setPopUp(false);
    }

    const handleCancelDelete = () => {
    console.log('No buttton clicked')
      setPopUp(false);
      setDeleteId(null);

    }


  return (
    <div className="w-full h-screen p-20 flex flex-col ">


      <div className="mb-4 flex items-center justify-center"><h2 className=" text-4xl text-black font-extrabold">Clients</h2></div>
       <div className=" h-6 mb-8 "><input className="w-96 px-4 border border-black py-3 rounded-md" type="text" placeholder="Search ........" onChange={handleFilter}/></div>

        <div className="w-96 flex  items-center gap-2 justify-between m-auto">
            <div className="w-40 flex items-center justify-center bg-[#0c6b79] rounded-sm py-2"><h3 className="text-black">Pathology</h3></div>
            <div className="w-40 flex items-center justify-center bg-[#0C6B79] rounded-sm py-2"><h3 className="text-black">Client Register</h3></div>
            <div className="w-40 flex items-center justify-center bg-[#0C6B79] rounded-sm py-2"><h3 className="text-black">Client Register</h3></div>
        </div>
       
        {popUp &&
           <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-auto px-10 py-5 bg-slate-300 text-center my-0 mx-auto z-30">
            
           <h2 className="mb-8">Are you sure you want to delete this client.The action can not be reversed</h2>
           <div className="w-32 flex items-center justify-between mx-auto">
             <button className="bg-red-400 p-2 w-16 mr-4 rounded-sm cursor-pointer" onClick={()=>handleConfirmDelete}>YES</button>
             <button className="bg-green-400 p-2 w-16 rounded-sm cursor-pointer" onClick={()=>handleCancelDelete}> NO</button>
           </div>
           
         </div>
        }
     
    <DataTable
    columns={columns} 
    data={records}
    selectableRows
    pagination
    >
      </DataTable></div>
  )
}

export default CustomerDataTable;