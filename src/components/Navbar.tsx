
import { useSelector } from "react-redux"
import {  NavLink, useLocation } from "react-router-dom"
import { cartSelector } from "../Redux/features/Carte/CarteSlice"
import Btn from "./ui/Btn"

const Navbar = () => {

 const {carteItems} = useSelector(cartSelector)
     
     const {pathname} = useLocation();
   const storageKey = 'addLoged';
 const userDataString = localStorage.getItem(storageKey);
 const userData = userDataString ? JSON.parse(userDataString) : null 

const Logoutin = () =>{
    localStorage.removeItem(storageKey);
    setTimeout(() =>{
      location.replace(pathname)
    },1200)
  }
  

  return (
    <nav className=" bg-red-400 rounded p-5 max-w-2xl mx-auto my-7">
        <ul className="flex items-center justify-between space-x-2">

        <li className=" duration-200 font-semibold 
        text-lg hover:text-[#d2d9e9]">
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        <li> <NavLink to="/AddCart">
            <p className=" text-lg font-medium hover:text-[#d2d9e9] ">
            Add to Cart ({carteItems.length})</p>
            </NavLink> </li>
           
            {userData ? ( 
           <div className="text-white flex justify-center 
           items-center space-x-14">
            <p className=" duration-200 font-semibold text-lg">
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </p> 
          

             <Btn cla="bg-blue-500"  onClick={Logoutin}>
              Logout</Btn> 

            </div>
            
         ) : ( 
          <ul className="flex items-center space-x-7 text-white">
               
          <li className=" duration-200 font-semibold text-lg">
            <NavLink to="/login">Login Admin</NavLink>
          </li>
          

        
          
        </ul>
         ) 
         }
            

            

            

        </ul>
      
    </nav>
  )
}

export default Navbar
