import React from "react";
import Card from "./Card";
import axios from "axios";

function Content() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    setPosts([]);
    axios.get("http://localhost:5000/posts").then((res) => {
      res.data.data.map((post) => {
        setPosts((prev) => [...prev, post]);
      });
    });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 text-xl font-semibold flex-1 h-screen max-w-7xl mx-auto gap-10 mt-10">
      {posts.map((post, key) => (
        <Card title={post.title} image={post.image} key={key} />
      ))}
    </div>
  );
}

export default Content;
