import React from "react";
import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/Home";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App min-h-screen">
      {isAuthenticated ? <Home /> : <Login />}
    </div>
  );
}

export default App;
