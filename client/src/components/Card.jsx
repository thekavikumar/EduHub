import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({
  userIcon,
  title,
  image,
  likes,
  comments,
  shares,
  commentCount,
  link,
  id,
  desc,
  userName,
}) {
  const [like, setLike] = React.useState(likes);
  const [liked, setLiked] = React.useState(0);
  const [comment, setComment] = React.useState(comments);
  const [share, setShare] = React.useState(shares);

  const handleLike = () => {
    if (liked == 0) {
      setLike(like + 1);
      setLiked(liked + 1);
      axios
        .post("http://localhost:5000/like", {
          id: id,
          like: like,
        })
        .then((res) => {
          console.log(res);
        });
    } else if (liked == 1) {
      setLike(like - 1);
      setLiked(liked - 1);
      axios
        .post("http://localhost:5000/dislike", {
          id: id,
          like: like,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  return (
    <div className="flex flex-col h-[400px] w-[300px] rounded-[10px] mx-auto mt-2 border-2 border-gray-400 hover:border-gray-900 hover:shadow-2xl cursor-pointer">
      <Link
        to="/details"
        state={{
          title: title,
          userIcon: userIcon,
          userName: userName,
          description: desc,
          blogLink: link,
          image: image,
          idI: id,
          commentList: comments,
          likes: likes,
        }}
      >
        <div className="flex items-center gap-2">
          <img
            src={
              !userIcon || userIcon === undefined
                ? "./assets/logo.png"
                : userIcon
            }
            alt="logo"
            referrerpolicy="no-referrer"
            className="object-contain h-[50px] rounded-full mt-3 w-fit ml-3"
          />
          <h1 className="font-bold text-gray-700">{userName}</h1>
        </div>
      </Link>

      <Link
        to="/details"
        state={{
          title: title,
          userIcon: userIcon,
          userName: userName,
          description: desc,
          blogLink: link,
          image: image,
          idI: id,
          commentList: comments,
          likes: likes,
        }}
        className="h-full"
      >
        <h1 className="text-gray-900 font-bold ml-3 mt-1 line-clamp-3">
          {title}
        </h1>
      </Link>

      <Link
        to="/details"
        state={{
          title: title,
          userIcon: userIcon,
          userName: userName,
          description: desc,
          blogLink: link,
          image: image,
          idI: id,
          commentList: comments,
          likes: likes,
        }}
      >
        <img
          className="object-contain w-full rounded-3xl p-3"
          src={image}
          alt="banner"
        />
      </Link>

      <div className="flex items-center  justify-between p-3 bg-slate-200 rounded-xl m-3 mt-0 ">
        <div className="flex items-center gap-1 " onClick={handleLike}>
          <AiOutlineHeart size={"30px"} />
          <h1 className="text-black font-bold">{like}</h1>
        </div>
        <div className="flex items-center gap-1">
          <BiCommentDetail size={"28px"} />
          <h1 className="text-black font-bold">{commentCount}</h1>
        </div>
        <div
          className="flex items-center gap-1"
          onClick={() => {
            navigator.clipboard.writeText(link);
            toast.success("Link Copied to Clipboard!");
          }}
        >
          <RiShareForwardLine size={"30px"} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Card;
