

import {  NavLink } from "react-router-dom"

const Navbar = () => {
     
//     const {pathname} = useLocation();
//     const storageKey = 'addPLoged';
// const userDataString = localStorage.getItem(storageKey);
// const userData = userDataString ? JSON.parse(userDataString) : null 

// const Logoutin = () =>{
//     localStorage.removeItem(storageKey);
//     setTimeout(() =>{
//       location.replace(pathname)
//     },1200)
//   }
  

  return (
    <nav className=" bg-red-600 rounded p-5 max-w-2xl mx-auto my-7">
        <ul className="flex items-center justify-between space-x-6">

        <li className=" duration-200 font-semibold 
        text-lg hover:text-[#d2d9e9]">
          <NavLink to="/">
            Home
          </NavLink>
        </li>
           
           {/* {userData ? ( */}
           <div className="text-white flex justify-center 
           items-center space-x-14">
            
          

            {/* <p  onClick={Logoutin}>
              Logout</p> */}

            </div>
            
        {/* ) : ( */}
          <ul className="flex items-center space-x-7 text-white">
             <li> <NavLink to="/AddCart">
            <p className=" text-lg font-medium hover:text-[#d2d9e9] ">
            Add to Cart (0)</p>
            </NavLink> </li>
          <li className=" duration-200 font-semibold text-lg">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className=" duration-200 font-semibold text-lg">
            <NavLink to="/login">Login</NavLink>
          </li>
          
        </ul>
        {/* ) */}
        {/* } */}
            

            

            

        </ul>
      
    </nav>
  )
}

export default Navbar
