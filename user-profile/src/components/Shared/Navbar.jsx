import { useState } from "react";
import { CgMenuRight } from 'react-icons/cg';
import { RxCross2 } from 'react-icons/rx';
import navLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] =useState(false);
    const Menus =[
        {name:"USER LIST",Link:"/"},
        {name:"ABOUT",Link:"/about"},
        {name:"CONTACT",Link:"/contact"},
    ];
      
  return (
   <div className='shadow-md w-full absolute top-0 left-0 z-10'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
               <Link to="/" className="flex align-middle gap-2"> <img src={navLogo} alt="navLogo" height={40} width={30}/><span>Users</span></Link>
            </div>
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <RxCross2 size={25}/> : <CgMenuRight size={25}/>
                }
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                   Menus.map((menu,index) => (
                    <li key={index} className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to={menu.Link} className='text-gray-800 hover:text-blue-400 duration-500'>{menu.name}</Link>
                    </li>))
                }
                <button className='btn bg-[#00A0E1] text-white md:ml-8 hover:bg-[#00436E] font-semibold px-3 py-1 rounded-lg duration-500 md:static'>Get Started</button>
            </ul>
           </div>
        </div>
  )
}

export default Navbar;