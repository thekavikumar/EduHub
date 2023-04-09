import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function FullCard() {
  const { user } = useAuth0();
  const location = useLocation();
  const {
    title,
    image,
    userIcon,
    idI,
    userName,
    description,
    commentList,
    likes,
    blogLink,
  } = location.state;

  const [comment, setComment] = React.useState("");
  const data = [user.name, user.picture, comment];
  const [comments, setComments] = React.useState(commentList);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/comment", {
        id: idI,
        comment: data,
      })
      .then((res) => {
        console.log(res);
        setComment("");
        setComments((prev) => [...prev, data]);
      });
  };

  return (
    <div className="max-w-4xl w-full rounded-lg mt-10 mx-auto">
      <h1 className="font-bold text-gray-800 text-5xl">{title}</h1>
      <div className="border-l-4 border-blue-600">
        <h1 className="mt-8 ml-2 text-gray-700 text-2xl">{description}</h1>
      </div>
      <div className=" mt-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img
            className="w-[30px]"
            src="https://img.icons8.com/arcade/64/null/facebook-like.png"
          />
          <h1 className="font-bold text-gray-800 text-[20px]">{likes}</h1>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://img.icons8.com/emoji/48/null/sparkling-heart.png"
            className="w-[30px]"
          />
          <h1 className="font-bold text-gray-800 text-[20px]">{likes}</h1>
        </div>
      </div>
      <div className="mt-10">
        <a href={blogLink} target="_blank" className=" cursor-pointer">
          <img src={image} alt="banner" className=" rounded-xl" />
        </a>
      </div>
      <div className="mt-10 flex flex-col">
        <h1 className="font-bold text-gray-800 text-3xl">Add Your Comment</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            id="comment"
            rows="4"
            class="block p-2 md:p-4 w-full mt-5 text-lg text-gray-900 bg-gray-100 rounded-lg border border-gray-500 focus:ring-blue-500 focus:outline-blue-500"
            placeholder="Enter your comment here"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col mt-10 ">
        {comments.length === 0 ? (
          ""
        ) : (
          <h1 className="font-bold text-gray-800 text-3xl">Comments</h1>
        )}
        <div className="mt-3">
          {comments.map((comment) => {
            return (
              <div className="flex border-l-4 border-blue-600 mt-5 flex-col">
                <div className="flex gap-3 ml-2 items-center">
                  <img
                    src={comment[1]}
                    alt="logo"
                    className=" rounded-full w-[50px]"
                  />
                  <h1 className="font-bold text-lg text-gray-800">
                    {comment[0]}
                  </h1>
                </div>
                <h1 className="text-gray-700 mt-2 font-medium text-xl ml-3">
                  Comment: {comment[2]}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FullCard;
