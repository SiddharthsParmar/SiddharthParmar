
"use client"

import { useState } from "react"



const Navbar = () => {
  const [theme , setTheme] = useState(true);
   
  return (
    <div className="h-14 w-full  flex justify-between" id="navbar-container">
<div className="flex justify-between items-center gap-3.5">
    <h2 className="text-gray-600">siddharth.official.swe@gmail.com</h2>
    <a href="" className={theme==true?"bg-white px-4.5 rounded-4xl border-gray-600 border-1":"bg-black text-white px-4.5 rounded-4xl border-gray-600 border-1"}>CV</a>
</div>
<div className="flex items-center ">
    <a href="">Github</a><span>/</span><a href="">Linkedin</a>
   
    
</div>


    </div>
  )
}

export default Navbar