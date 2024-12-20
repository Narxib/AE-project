
import sunLogo from "../assets/sun.svg";
import menu from "../assets/menu.svg";
import { useState } from "react";

export default function Navbar(){
  const [visible,setVisible] = useState(false)

  function changeVisbility(value){
    console.log(value)
    setVisible(value)
  }


    return (
        <div className="flex relative  w-full bg-white h-16 items-center justify-between">
            <img className="w-12 h-8 ml-2" src="/ae.webp" alt="as" />
   
         <ul className={`hidden md:flex h-auto w-full md:w-1/2 justify-center gap-2 items-center`}>
            <li
             className="flex px-2  hover:bg-gray-100 h-12 justify-center items-center cursor-pointer"
            >
                Home
            </li>
            <li
             className="flex px-2  hover:bg-gray-100 h-12 justify-center items-center cursor-pointer"
            >
                Projects
            </li>
            <li
             className="flex px-2  hover:bg-gray-100 h-12 justify-center items-center cursor-pointer"
            >
                Contacts
            </li>
            <li
             className="flex px-2  hover:bg-gray-100 h-12 justify-center items-center cursor-pointer"
            >
                About
            </li>
            <li
             className="flex px-2 hover:bg-gray-100 h-12 justify-center items-center cursor-pointer"
            >
                Partners
            </li>
        </ul>
    <div className="flex top-16 absolute  justify-center items-center h-auto w-full bg-red-300" id="navbar-default">
        <ul className={` ${visible? "block":"hidden"} h-auto w-full bg-red-300  md:w-1/2 justify-center gap-2 items-center`}>
            <li
             className="flex  hover:bg-gray-100 h-12 justify-center items-center cursor-pointer"
            >
                Home
            </li>
            <li
             className="flex  hover:bg-gray-100 h-12 justify-center items-center cursor-pointer"
            >
                Projects
            </li>
            <li
             className="flex  hover:bg-gray-100 h-12 justify-center items-center cursor-pointer"
            >
                Contacts
            </li>
            <li
             className="flex  hover:bg-gray-100 h-12 justify-center items-center cursor-pointer"
            >
                About
            </li>
            <li
             className="flex hover:bg-gray-100 h-12 justify-center items-center cursor-pointer"
            >
                Partners
            </li>
        </ul>
    </div>

    <div className="flex mr-4 w-auto justify-around items-center">
     <button
    onClick={()=>changeVisbility(!visible)}
        data-collapse-toggle="navbar-default"
     className=" aspect-square md:hidden inline-flex "
    >
        <img src={menu.src} alt="" />
    </button>
        <button
         className="hidden md:block border p-2 rounded-full hover:bg-gray-100 hover:border-gray-300"
        >
            <img className="w-8 aspect-square" src={sunLogo.src} alt="themeIcon" />
        </button>
    </div>
</div>

    )
}
