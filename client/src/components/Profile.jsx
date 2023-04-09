import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth0();
  const [userName, setUserName] = useState("");
  const [userIcon, setUserIcon] = useState("");
  const loadProfile = () => {
    setUserName(user.name);
  

  const handleSubmit = () => {
    console.log(formData);
    axios.post("http://localhost:5000/posts", formData).then((res) => {
      console.log(res);
      toast.success("Your Post Created Successful!");
      setSent(true);
    });
  };

  useEffect(() => {
    if (imageUrl) {
      handleSubmit();
    }
  }, [imageUrl]);

  const uploadImage = async (e) => {
    e.preventDefault();

    const id = toast.loading("Uploading Your Image...", {
      type: toast.TYPE.INFO,
      isLoading: true,
      autoClose: 1000,
    });

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dsbulcgwt");

    axios
      .post("https://api.cloudinary.com/v1_1/dsbulcgwt/image/upload", data)
      .then((res) => {
        console.log(res);
        setImageUrl(res.data.secure_url);
        toast.update(id, {
          render: "Image Uploaded Successfully!",
          type: toast.TYPE.SUCCESS,
          isLoading: false,
          autoClose: 1000,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.update(id, {
          render: "Image Upload Failed!",
          type: toast.TYPE.ERROR,
          isLoading: false,
          autoClose: 1000,
        });
      });
  };
  return (
    <div className="max-w-7xl w-full rounded-lg mt-10 mx-auto">
      <h1 className="font-bold text-gray-800 text-center text-3xl lg:text-5xl">
        CREATE A NEW POST
      </h1>
      <form onSubmit={uploadImage}>
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
            <input
              class="block p-2 md:p-3 text-lg mx-auto bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-blue-500 w-full md:w-1/2"
              id="file_input"
              placeholder="Upload your image"
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
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
          {!sent ? (
            <button
              className=" p-3 bg-blue-600 w-1/2 font-semibold text-lg text-white rounded-lg hover:bg-blue-800 hover:shadow-lg md:w-[47%]"
              type="submit"
            >
              SUBMIT
            </button>
          ) : (
            <Link
              to="/"
              className=" p-3 bg-blue-600 w-1/2 font-semibold text-lg text-white rounded-lg hover:bg-blue-800 hover:shadow-lg md:w-[47%] flex items-center justify-center"
            >
              GO TO HOME
            </Link>
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default PostCreate;
