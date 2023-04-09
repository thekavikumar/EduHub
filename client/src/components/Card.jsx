import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import Popup from "./Popup";
import axios from "axios";

function Card({ userIcon, title, image, likes, comments, shares, id }) {
  const [like, setLike] = React.useState(likes);
  const [comment, setComment] = React.useState(comments);
  const [share, setShare] = React.useState(shares);

  const handleLike = () => {
    if (like === 0) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }

    axios
      .post("http://localhost:5000/like", {
        id: id,
        like: like,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className="flex flex-col h-[400px] w-[300px] rounded-[10px] mx-auto mt-2 border-2 border-gray-400 hover:border-gray-900 hover:shadow-2xl cursor-pointer">
        <div className="flex items-center gap-2">
          <img
            src={userIcon ? userIcon : "./assets/logo.png"}
            alt="logo"
            className="object-contain h-[50px] rounded-full mt-3 w-fit ml-3"
          />
          <h1 className="font-bold ">Dev KK</h1>
        </div>
        <h1 className="text-black font-bold ml-3 mt-1 line-clamp-3 h-full">
          {title}
        </h1>
        <img
          className="object-contain w-full rounded-3xl p-3"
          src={image}
          alt="banner"
        />

        <div className="flex items-center  justify-between p-3 bg-slate-200 rounded-xl m-4 mt-0 ">
          <div className="flex items-center gap-1 " onClick={handleLike}>
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
    </>
  );
}

export default Card;
