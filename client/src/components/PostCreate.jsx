import React, { useState } from "react";

function PostCreate() {
  const [title, setTitle] = useState("");
  const [blogLink, setBlogLink] = useState("");
  const [description, setDescription] = useState("");

  const formData = {
    title: title,
    blogLink: blogLink,
    description: description,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-7xl w-full rounded-lg mt-10 mx-auto">
      <h1 className="font-bold text-gray-800 text-center text-3xl lg:text-5xl">
        CREATE A NEW POST
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col p-10 gap-5">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="title"
              id="title"
              className="p-2 md:p-4 text-lg mx-auto bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-blue-500 w-full md:w-1/2"
              placeholder="Enter the title of your post"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="blogLink"
              id="blogLink"
              className="p-2 md:p-4 text-lg mx-auto bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-blue-500 w-full md:w-1/2"
              placeholder="Enter the link to your blog post"
              onChange={(e) => {
                setBlogLink(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              id="description"
              rows="4"
              class="block p-2 md:p-4 w-full mx-auto md:w-1/2 text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-blue-500"
              placeholder="Enter the description of your post"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className=" p-3 bg-blue-600 w-1/2 font-semibold text-lg text-white rounded-lg hover:bg-blue-800 hover:shadow-lg md:w-[47%]"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostCreate;
