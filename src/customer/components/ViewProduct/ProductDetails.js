

import { Tabs , Flowbite } from "flowbite-react";
import { useRef, useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const customTheme = {
  tabs:{
      "base": "flex flex-col mx-auto w-full gap-2 lg:flex-row md:w-[90%] text-clamp-p",
      "tablist": {
        "base": "flex text-center  lg:flex-col lg:min-w-min w-full lg:w-[20%] flex-row overflow-y-hidden  overflow-x-auto lg:overflow-none overflow-start no-scrollbar",
        "styles": {
          "default": " border-b border-gray-200 dark:border-gray-700 ",
          "underline": "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
          "pills": "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
          "fullWidth": "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
        },
        "tabitem": {
          "base": "flex items-center justify-center min-w-fit  w-full rounded-t-lg py-4 px-6  text-clamp-p font-semibold first:ml-0 focus:outline-none  disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
          "styles": {
            "default": {
              "base": "rounded-t-lg",
              "active": {
                "on": "bg-gray-100 text-purple-600 dark:bg-gray-800 dark:text-cyan-500",
                "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
              }
            },
            "underline": {
              "base": "rounded-t-lg",
              "active": {
                "on": "active rounded-t-lg border-b-2 border-cyan-600 text-cyan-600 dark:border-cyan-500 dark:text-cyan-500",
                "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
              }
            },
            "pills": {
              "base": "",
              "active": {
                "on": "rounded-lg bg-cyan-600 text-white",
                "off": "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
              }
            },
            "fullWidth": {
              "base": "ml-0 flex w-full rounded-none first:ml-0",
              "active": {
                "on": "active rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
                "off": "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              }
            }
          },
          "icon": "mr-2 h-5 w-5"
        }
      },
      "tabitemcontainer": {
        "base": "text-center",
        "styles": {
          "default": "",
          "underline": "",
          "pills": "",
          "fullWidth": ""
        }
      },
      "tabpanel": "py-3"
}
}

export default function ProductDetails() {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-3 " >
    <Flowbite theme={{theme:customTheme}} >
      <Tabs aria-label="Default tabs" style="default" color="primary"  ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)} >
        <Tabs.Item active title="Profile" icon={HiUserCircle} color="primary" >
          This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item active title="Rishabh" icon={HiUserCircle} color="primary" >
          This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item active title="Aniket" icon={HiUserCircle} color="primary" >
          This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item active title="Name" icon={HiUserCircle} color="primary" >
          This is <span className="font-medium text-gray-800 dark:text-white">Profile tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Dashboard" icon={MdDashboard}>
          This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={HiClipboardList}>
          This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </Tabs.Item>
        <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs>
      
      </Flowbite>
    </div>
  );
}
