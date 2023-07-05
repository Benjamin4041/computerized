import React from "react";
// import { Link } from "react-router-dom";
export default function Authlayout({ children, header }) {
  return (
    <div className="flex h-screen w-screen">
      <div className="lg:w-2/4 w-screen relative flex ">
        <img
          src="https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="h-screen w-full object-cover"
        />
        <h1 className="absolute text-4xl text-white lg:top-52 top-32 text-center w-full">
          {header}
        </h1>
      </div>
      {children}
    </div>
  );
}
