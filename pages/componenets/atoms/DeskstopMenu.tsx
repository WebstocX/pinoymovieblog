import Link from "next/link"
import React, { useState } from "react"
import CustomButton from "./button"
import {useRouter} from "next/router"

interface DeskStopMenuProps{
  
}
const DeskStopMenu:React.FC<DeskStopMenuProps> = () => {
    const Links = [
        {link:"/", name:"Home"},
        {link:"/about", name:"About"},
        {link:"/",name:"Conatct"},
        {link:"/",name:"services"}
      ]
      const router = useRouter()
      const current = router.pathname   
      const [toggle, changeToggle] = useState(false)
      console.log(toggle)
  return (
    <div className=" container -mt-5 md:mx-auto flex flex-wrap p-10 md:ml-0 -ml-5 md:p-10 flex-col md:flex-row items-center">
    <Link href={"/"}>
    <a className="-ml-36 -mx-10 md:mx-0  md:ml-0 flex transform hover:scale-110 motion-reduce:transform-none cursor-pointer   font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl cursor-pointer">WebStocX</span>
    </a>
    </Link>
     {toggle? 
   <CustomButton 
   click={()=>{
      changeToggle(!toggle)
    }} 
    label="" children={<>
    <p className="border-2 transition-all  border-white"></p>
    <p className="border-2  transition-all mt-2 border-white"></p></>} 
    classN={"md:hidden mx-8  bg-indigo-500 h-12 p-3 w-12 shadow-2xl focus:outline-white text-white rounded-xl  absolute ml-96"}/>
       :<CustomButton 
       click={()=>{
        changeToggle(!toggle)
          }}
    label="" children={<><p className="border-2 transition-all transform rotate-45  border-white"></p>
    <p className="border-2  transform -rotate-45 transition-all  -mt-2 border-white"></p></>} 
    classN={"md:hidden mx-8 bg-indigo-500 h-12 p-3 w-12 shadow-2xl focus:outline-white text-white rounded-xl  absolute ml-96"}/>
}
    <nav className="hidden md:ml-5 md:block md:mr-auto md:ml-4 md:py-1 md:pl-4  md:border-gray-400	flex flex-wrap items-center  justify-center">
     {Links.map((link)=>{
       return(
        <Link href={link.link}>
        <a className={current !== link.link?"mr-5 hover:text-indigo-900 ":"mr-5 text-indigo-600 hover:text-indigo-900 font-bold "}>{link.name}</a>
        </Link>
       )  
     })}
     
    </nav>
    <CustomButton   
    click={null}
    label={"Contact Us"} 
    children={null}
    classN={"rounded-lg hidden md:block transform hover:scale-110 transition-all hover:shadow-2xl	 motion-reduce:transform-none text-white bg-indigo-500 p-3"}></CustomButton>
    
  </div>
  )
}

export default DeskStopMenu

