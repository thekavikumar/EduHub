import React from "react";
import Card from "./Card";

function Content() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 text-xl font-semibold flex-1 h-screen max-w-7xl mx-auto gap-10 mt-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Content;
