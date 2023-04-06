import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import TextSpan from "./TextSpan";

function Login() {
  const sentence = "EDUCATE. EXPLORE. EVOLVE.".split("");

  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="flex min-h-screen flex-col gap-3 items-center justify-center">
      <h1 className="font-extrabold text-gray-900 text-2xl  lg:text-5xl text-center">
        WELCOME TO EDUHUB
      </h1>
      <h2 className="font-extrabold text-gray-900 text-3xl lg:text-6xl text-center">
        {sentence.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}{" "}
            </TextSpan>
          );
        })}
      </h2>
      <button
        className="p-3 w-44 text-[18px] font-bold mt-2 border-2 border-black rounded-[6px] bg-[#F9F9F9] hover:bg-black hover:text-[#ffffff] lg:text-[23px] lg:w-56"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </div>
  );
}

export default Login;
