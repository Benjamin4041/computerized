import React from "react";
// import { Link } from "react-router-dom";
export default function Authlayout({ children , header}) {
  return (
    <div className="flex h-screen w-screen">
      <div className="lg:w-2/4 w-screen relative flex ">
        <img
          src="https://i.ibb.co/4ZLWd7K/image-554.png"
          alt=""
          className="h-screen w-full"
        />
        <h1 className="absolute text-4xl text-white lg:top-52 top-32 text-center w-full">{header}</h1>
      </div>
      {children}
    </div>
  );
}
