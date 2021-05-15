import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomButton from "./button";
import CustomModal from "./CustomModal";

interface MenuProps {}
const Menu: React.FC<MenuProps> = () => {
  const Links = [
    {link:"/", name:"Home"},
    {link:"/about", name:"About"},
    {link:"/contact",name:"Conatct"},
    {link:"/services",name:"Services"},
    {link:"/pakages",name:"Our Pakages"}
  ]
  const router = useRouter();
  const current = router.pathname;
  const [toggle, changeToggle] = useState(false);

 
  return (
    <>
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 md:p-5 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center  md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 -ml-2 md:ml-0 flex flex-row items-center justify-between ">
            <a  className="cursor-pointer">
              <Link href="/">
              <img width="60rem" src="/LOGO.png"/>
              </Link>
            </a>
            <Link href="/">
            <span className="md:ml-3 text-xl font-bold cursor-pointer">
              WebStocX
            </span>
            </Link>

            <CustomButton
              click={() => {
                changeToggle(!toggle);
              }}
              label=""
              children={
                !toggle ? (
                  <>
                    <p className="border-2 transition-all  border-white"></p>
                    <p className="border-2  transition-all mt-2 border-white"></p>
                  </>
                ) : (
                  <>
                    <p className="border-2 transition-all transform rotate-45  border-white"></p>
                    <p className="border-2  transform -rotate-45 transition-all  -mt-2 border-white"></p>
                  </>
                )
              }
              classN={
                "md:hidden rounded-lg bg-indigo-500 h-12 p-3 w-12 shadow-2xl rounded-xl shadow-2xl focus:outline-none focus:shadow-outline"
              }
            />
          </div>
          <nav className="flex-col md:ml-10 flex-grow pb-4  md:pb-0 hidden md:flex md:justify-start md:flex-row">
            {Links.map((link) => {
              return (
                <Link href={link.link}>
                  <a
                    className={
                      current !== link.link
                        ? "mr-5 hover:text-indigo-900 "
                        : "mr-5 text-indigo-600 hover:text-indigo-900 font-bold "
                    }>
                    {link.name}
                  </a>
                </Link>
              );
            })}
          </nav>
          <CustomButton
           click={()=>{
            router.push("/contact")
          }}
            label={"Contact Us"}
            children={null}
            classN={
              "rounded-lg hidden md:block duration-500 hover:ease-in-out transform hover:scale-110 shadow-2xl text-white bg-indigo-500 p-3"
            }></CustomButton>
        </div>
        {toggle && (
          <div className="inline-block h-full  bg-white rounded-lg text-left  transform transition-all w-full">
            <div className="ml-5 p-2">
              <ul className="list-none md:list-disc">
                {Links.map((link) => {
                  return (
                    <Link href={link.link}>
                      <li
                        className={
                          current !== link.link
                            ? "font-bold leading-loose text-3xl text-black"
                            : "font-bold leading-loose text-3xl text-indigo-500"
                        }>
                        {link.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
              <Link href={"/"}>
              <CustomButton
                label="Conatct  Us"
                children={null}
                classN= "w-full -ml-2 shadow-2xl rounded-xl mt-64 text-white font-bold text-2xl p-5 bg-indigo-500"
                click={()=>{
                  router.push("/contact")
                }}
              />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
