import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";

function Card() {
  return (
    <div className="flex flex-col h-[400px] w-[300px] rounded-[10px] mx-auto mt-2 border-2 border-gray-400 hover:border-gray-900 hover:shadow-2xl cursor-pointer">
      <img
        src="./assets/logo.png"
        alt="logo"
        className="object-contain h-[50px] rounded-full mt-3 w-fit ml-3"
      />
      <h1 className="text-black font-bold ml-3 mt-3 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
        consequuntur!
      </h1>
      <img
        className="object-contain w-full rounded-3xl p-3 mt-3"
        src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/af84190fbc5f932bc282def611429ae4"
        alt="banner"
      />

      <div className="flex items-center  justify-between p-3 bg-slate-200 rounded-xl m-4 mt-0 ">
        <div className="flex items-center gap-1 ">
          <AiOutlineHeart size={"30px"} />
          <h1 className="text-black font-bold">100</h1>
        </div>
        <div className="flex items-center gap-1">
          <BiCommentDetail size={"28px"} />
          <h1 className="text-black font-bold">50</h1>
        </div>
        <div className="flex items-center gap-1">
          <RiShareForwardLine size={"30px"} />
          <h1 className="text-black font-bold">30</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
