import React from 'react';
import { useState, useEffect } from 'react'


const Header = () => {
   
    const [open, setOpen]=useState(true);
    const [changeState,setChangeState]=useState(false);
    const [Ubication,settUbication]=useState(0);

   const handleClick =()=>{
    setOpen(!open)
   }
   const scrollFunction =()=>{
    const actualUbication=window.scrollY;
    if (Ubication>=actualUbication){
        setChangeState(!changeState)
    }
   }
 
   useEffect(()=>{
    settUbication(Ubication,window.scrollY);
   },[])
   
    return (
        <>
        
        <div onScroll={scrollFunction}  className={`Header ${changeState ? "scroll-bar":""}`}>
           
                   <button onClick={handleClick} className='menu-toggle'><i class="fa-solid fa-bars"></i></button>
                   <div className={`menu ${ open ? "hidden" :""}`} >
                   <ul style={{listStyle:"none"}}>
                        <li className='menu-list'><i style={{marginRight:"1rem"}} class="fa-solid fa-address-card"></i>About Me</li>
                        <li className='menu-list'><i style={{marginRight:"1rem"}} class="fa-solid fa-briefcase"></i>Projects</li>
                        <li className='menu-list'><i style={{marginRight:"1rem"}} class="fa-solid fa-phone"></i>Contact</li>
                      </ul> 
                   </div>
                        
        </div>
        </>
    );
};

export default Header;