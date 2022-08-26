import React, { useContext } from "react";
import { StoreContext } from "../App";
import Navbar from "./Sub_Components/navbar";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const Cart = () => {
  const { cartState, cartDispatch, ladiesDispatch, menDispatch, newArrivalDispatch} = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 mt-[3.5em]">

      {cartState.map((product, index) => {
          const { name, price, url, quantity, id, desc, category } = product;
        return (
          <div key={id} className="flex items-center bg-gray-200 m-2 rounded-lg overflow-hidden w-[90%] mx-auto relative">
            <img src={url} alt="" className="w-[100px] h-[100%]"/>
            <div className="mx-2">
              <h2 className="font-bold text-[#303030] text-xl">{name}</h2>
              <h3 className="text-[#303030] font-medium">{desc}</h3>
              <h3 className="text-[#303030] font-medium">
                Item Price: <span className="text-yellow-500">{price} $</span>
              </h3>
              <h3 className="text-[#303030] font-medium flex items-center">
                Quantity:
                <span className="flex items-center w-20 justify-between ml-2">
                  <FiMinus className="box-content bg-red-400 text-white text-base p-1 rounded" onClick={() => cartDispatch({type: "DEC_QUANTITY", payload: index})}/>{" "}
                  {quantity}{" "}
                  <BsPlusLg className="box-content bg-green-400 text-white text-base p-1 rounded" onClick={() => cartDispatch({type: "INC_QUANTITY", payload: index})}/>
                </span>
              </h3>
            </div>
            <button className="bg-red-500 px-4 py-1 text-medium text-white rounded absolute right-4" onClick={() => {
                cartDispatch({type: "REMOVE_PRODUCT", payload: id})
                if(category === "Female") {
                  ladiesDispatch({type: "REMOVE_FROM_CART", payload: id})
                } else if(category === "Male") {
                  menDispatch({type: "REMOVE_FROM_CART", payload: id})
                } else if (category === "NewArrival") {
                  newArrivalDispatch({type: "REMOVE_FROM_CART", payload: id})
                }
              }}>Remove</button>
          </div>
        );
    })}
    </div>
    </div>
  );
};

export default Cart;
