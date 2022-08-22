import React from "react";
import Navbar from "./navbar";
import Carousal from "./carousal.js";
import { RiTruckLine } from "react-icons/ri";
import { MdOutlineMoneyOff } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

const home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Carousal />
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-2">
          <div className="flex items-center bg-gray-300 px-2 py-2 border-2 border-gray-200 lg:text-xl">
            <RiTruckLine className="text-xl lg:text-4xl mr-2" />
            <h2 className="">Fast Shipping</h2>
          </div>
          <div className="flex items-center bg-gray-300 px-2 py-2 border-2 border-gray-200 lg:text-xl">
            <MdOutlineMoneyOff className="text-xl lg:text-4xl mr-2" />
            <h2 className="">Free Delivery</h2>
          </div>
          <div className="flex items-center bg-gray-300 px-2 py-2 border-2 border-gray-200 lg:text-xl">
            <FaHandsHelping className="text-xl lg:text-4xl mr-2" />
            <h2 className="">Easy Return</h2>
          </div>
          <div className="flex items-center bg-gray-300 px-2 py-2 border-2 border-gray-200 lg:text-xl">
            <GrSecure className="text-xl lg:text-4xl mr-2" />
            <h2 className="">Secure Payments</h2>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-black text-center mt-3">Shop by Category</h2>
        <div className="sm:flex m-5 flex-wrap">
          <div className="bg-slate-200 m-2 text-center py-20 bg-[url('https://6424709.fs1.hubspotusercontent-na1.net/hub/6424709/hubfs/hero-1-1.png?width=2000&height=700&name=hero-1-1.png')] bg-cover flex-1 cursor-pointer">
            <h2 className="text-5xl text-white font-bold border-y-4 py-2 border-white hover:italic transition-all">Ladies Fashion</h2>
          </div>
          <div className="bg-slate-200 m-2 text-center py-20 bg-[url('https://i0.wp.com/www.menstylefashion.com/wp-content/uploads/2021/05/Latinx-fashion-men.jpg?fit=900%2C580&ssl=1')] bg-cover flex-1 cursor-pointer">
            <h2 className="text-5xl text-gray-500 border-y-4 py-2 border-white bg-white font-bold hover:italic transition-all">Gents Week</h2>
          </div>
          <div className="bg-slate-200 m-2 text-center py-20 bg-[url('https://cdn.shopify.com/s/files/1/0475/7179/6123/files/TILE-2_bedca20b-202c-4eff-aaac-6dfe783e320f.jpg?v=1654534999')]  bg-cover flex-1 cursor-pointer">
            <h2 className="text-5xl text-white font-bold border-y-4 py-2 border-white hover:italic transition-all">Kids Color</h2>
          </div>
        </div>
        <div>
            
        </div>
      </div>
    </>
  );
};

export default home;
