import React from "react";
import { navigation } from "./navLinksData";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
export default function Navlinks({ toggleSideBar }) {
  return (
    <div className="my-auto">
      <div className=" md:block hidden my-auto">
        <ul className="flex gap-2 py-2 text-white ">
          <li className="font-sans">Home</li>
          {navigation.categories.map((category) => {
            return <li className="font-sans  group"> 
            <h1 className='font-sans bold '>{category.name}</h1>
            
            <div className="  hidden hover:block group-hover:block absolute top-19 text-black z-10  gap-7  shadow-lg shadow-current  rounded-lg ">
              <div className="   py-3 bg-violet-200 flex flex-row rounded-lg">
              <div className=" absolute left-3 top-[-3px] h-4 w-4 bg-violet-200 rotate-45 group-hover:block hover:block "></div>
              {category.sections.map((section)=>{
                return <div className=" m-5 text-sm text-h">
                  <h3 className=" font font-bold"> {section.name}</h3>
                  <ul>
                    {section.items.map((item)=>{
                      return <li>{item.name}</li>
                    })}
                  </ul>
                </div>
              })}
              </div>
            </div>
            </li>;

          })}
        </ul>
      </div>

      {/* Mobile Navigation  */}

      <div className="block md:hidden" onClick={toggleSideBar}>
        <MenuOpenIcon
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: "40px",
            padding: "4px",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  );
}
