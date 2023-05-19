import React from "react";
// import { Link } from "react-router-dom";
export default function Authlayout({ children, header }) {
  return (
    <div className="flex h-screen w-screen">
      <div className="lg:w-2/4 w-screen relative flex ">
        <img
          src="https://scontent.fabb1-2.fna.fbcdn.net/v/t1.18169-9/29595045_1828262033871174_4105171380369203820_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEykkE_XUoOTsFdwvTCu1Dl6-bUFxKOsi7r5tQXEo6yLkGr399KjCCyQZ0tTHn70fibDJPiz17vYgw2lTh98avq&_nc_ohc=aBvVHyF4bWsAX9qEnWZ&_nc_ht=scontent.fabb1-2.fna&oh=00_AfBgFGHSZ9mLehxOXWHShSyZkVgp40XgzmRayxKkl0Xavg&oe=648E9E0E"
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
