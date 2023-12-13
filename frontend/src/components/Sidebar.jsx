import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser} from "react-icons/ai";
import { Link } from "react-router-dom";

import dgiLogo from '../assets/dgi-clinics.png';
import { FaBoxes, FaChevronDown, FaChevronRight, FaMoneyBill, FaUserInjured, FaUsers, FaVial, FaVials } from "react-icons/fa";
import { FaThermometerHalf } from "react-icons/fa";
import { FaSnowflake } from "react-icons/fa";

function Sidebar() {
    const menus = [
        { name: "dashboard", link: "dashboard", icon: MdOutlineDashboard },
        { name: "user", link: "/", icon: AiOutlineUser },
        { name: "Activities", link: "activities", icon: FaUsers },
        { name: "Attendance", link: "attendance", icon: FaUsers },
        { name: "Clients", link: "clients", icon: FaUserInjured, margin: true },
        { name: "Test Category", link: "labtest", icon: FaVials },
        { name: "Inventory Mangement", link: "/", icon: FaBoxes, 
        subMenu: [
          {name: "Inventory Mangement", link: "/",},
          {name: "Inventory Mangement", link: "/",}
        ] },
        { name: "Client Billing System", link: "/", icon: FaMoneyBill,
        subMenu: [
          {name: "Client Billing", link: "/",},
          {name: "Client Billing", link: "/",}
        ] ,
         margin: true },
        { name: "Pathology", link: "/", icon: FaVial},
        { name: "Radiology", link: "/", icon: FaSnowflake },
        { name: "Report Booth", link: "/", icon: FaThermometerHalf },
        { name: "Setting", link: "/", icon: RiSettings4Line, margin: true },
      ];

      const [open, setOpen] = useState(true);
      const [openSubMenu, setOpenSubMenu] = useState("");


      const handleSubMenuClick = (menuName) => {
        setOpenSubMenu(menuName);
      };
      
  return (
      <section className="flex gap-4">
         <div className={`bg-primary min-h-screen ${open ? "w-60" : "w-16"} duration-500 text-gray-100 px-4`}>
          <div className="py-3 flex justify-end">
            <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
          </div>

          <div className="w-full h-auto flex items-center justify-center "><img className="cursor-pointer w-36" src={dgiLogo} /></div>

          <div className="mt-2 flex flex-col gap-4 relative overflow-scroll">
         {menus?.map((menu, i) => (
           <div key={i} className={`${menu.margin && "mt-4"} group flex items-center text-sm font-medium px-2 py-1 hover:bg-gray-800 rounded-md`}>

          <Link to={menu.link} className="group flex items-center w-full">
            <div className="mr-8">{React.createElement(menu.icon, { size: "20" })}</div>
            <h2 style={{ transitionDelay: `${i + 3}00ms`, }} className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
              {menu.name}
            </h2>
          </Link>
      
          {menu.subMenu && (
            <div onClick={() => handleSubMenuClick(menu.name)}>
              {openSubMenu === menu.name ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          )}
      
        {menu.subMenu && openSubMenu === menu.name && (
          <div className="flex flex-col">
            {menu.subMenu.map((subMenu, j) => (
              <Link to={subMenu.link} key={j} className="group flex items-center text-sm font-medium px-2 py-1 hover:bg-gray-800 rounded-md">
                <h2 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                  {subMenu.name}
                </h2>
              </Link>
            ))}
          </div>
        )}
      
      </div>
      
      ))}
     </div>

        
            </div>
        </section> 
  )
}

export default Sidebar
