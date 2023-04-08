import React from "react";
import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";
import { MdOutlineNewspaper } from "react-icons/md";
import PostCreate from "./components/PostCreate";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App min-h-screen">
      {isAuthenticated ? (
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col w-full p-8">
            <SearchBar />
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/newPost" element={<PostCreate />} />
            </Routes>
            <Link to="/newPost">
              <div className="md:p-4 p-3 bg-blue-700 text-white w-fit fixed bottom-0 md:m-8 m-4 -right-4 md:right-0 cursor-pointer rounded-full">
                <MdOutlineNewspaper size={"2em"} color="white" />
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <Login />
      )}
      {/* <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
      </Routes> */}
    </div>
  );
}

export default App;
