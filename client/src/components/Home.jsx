import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

import { MdOutlineNewspaper } from "react-icons/md";
import SearchBar from "./SearchBar";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full p-8">
        <SearchBar />
        <Content />
        <div className="md:p-4 p-3 bg-blue-700 text-white w-fit fixed bottom-0 md:m-8 m-4 -right-4 md:right-0 cursor-pointer rounded-full">
          <MdOutlineNewspaper size={"2em"} color="white" />
        </div>
      </div>
      {/* <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </div> */}
    </div>
  );
}

export default Home;
