import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { About, Contact, Home, Services } from "../../constatnts/routes";
import CustomButton from "./button";
import CustomModal from "./CustomModal";

interface MenuProps {}
const Menu: React.FC<MenuProps> = () => {
  const Links = [
    { link: Home, name: "Home" },
    { link: About, name: "About" },
    { link: Contact, name: "Conatct" },
    { link: Services, name: "Services" },
  ];
  const router = useRouter();
  const current = router.pathname;
  const [toggle, changeToggle] = useState(false);

 
  return (
    <>
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 md:p-5 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center  md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 -ml-2 md:ml-0 flex flex-row items-center justify-between ">
            <a href="#" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </a>
            <span className="md:ml-3 text-xl font-bold cursor-pointer">
              WebStocX
            </span>

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
            click={null}
            label={"Contact Us"}
            children={null}
            classN={
              "rounded-lg hidden md:block transform hover:scale-110 transition-all hover:shadow-2xl	 motion-reduce:transform-none text-white bg-indigo-500 p-3"
            }></CustomButton>
        </div>
        {toggle && (
          <div className="inline-block  bg-white rounded-lg text-left  transform transition-all w-full">
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
              <CustomButton
                label="Conatct Us"
                children={null}
                classN="w-full -ml-2 shadow-2xl rounded-xl mt-64 text-white font-bold text-2xl p-5 bg-indigo-500"
                click={null}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
