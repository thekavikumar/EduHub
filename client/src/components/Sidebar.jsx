import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { MdHub } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);
  const { user, logout } = useAuth0();

  const Menus = [
    { title: "My Feed", src: "Chart_fill", path: "/" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
    { title: "Logout", icon: <ExitToAppOutlinedIcon />, func: logout },
  ];

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`h-screen sticky top-0 ${
        isOpen ? "w-72 p-5 pt-8" : " w-14 pt-20 p-2"
      } bg-dark-purple relative duration-300`}
    >
      {isHover && isOpen && (
        <img
          onClick={() => setIsOpen(!isOpen)}
          src="./assets/control.png"
          alt="control"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple rounded-full ${
            !isOpen ? "transform rotate-180" : ""
          }`}
        />
      )}
      {!isOpen && (
        <img
          onClick={() => setIsOpen(!isOpen)}
          src="./assets/control.png"
          alt="control"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-2 border-dark-purple rounded-full ${
            !isOpen ? "transform rotate-180" : ""
          }`}
        />
      )}
      <div className="flex gap-x-4 items-center">
        <img
          src={user.picture}
          alt="propic"
          referrerpolicy="no-referrer"
          className={`object-contain cursor-pointer duration-500 w-[40px] h-[40px]  rounded-md`}
        />
        <h1
          className={`text-white origin-left font-medium text-[20px] duration-300 ${
            !isOpen && "scale-0 hidden"
          }}`}
        >
          {user.name}
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <Link to={Menu.path}>
            <li
              onClick={Menu.func ? Menu.func : null}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.src && <img src={`./assets/${Menu.src}.png`} />}
              {Menu.icon && <div>{Menu.icon}</div>}
              <span
                className={`${
                  !isOpen && "scale-0 hidden"
                } origin-left duration-200`}
              >
                {Menu.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      {isOpen && (
        <div
          className={`${
            !isOpen && "scale-0 hidden"
          } absolute bottom-0 p-3 mb-6 font-bold text-gray-400 hover:text-white cursor-pointer text-3xl duration-200 origin-left flex items-center gap-x-2`}
        >
          <MdHub />
          <h1>EduHub</h1>
        </div>
      )}
      {isOpen && (
        <div>
          <h1
            className={`${
              !isOpen && "scale-0 hidden"
            } absolute bottom-0 p-3 mb-2 font-bold text-gray-400 hover:text-white cursor-pointer text-xs duration-300`}
          >
            @copyright 2023
          </h1>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
