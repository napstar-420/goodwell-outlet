import React, { useContext } from "react";
import { StoreContext } from "../App";
import Navbar from "./Sub_Components/navbar";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import {ImBin} from 'react-icons/im'

const Cart = () => {
  const { cartState, cartDispatch, ladiesDispatch, menDispatch, newArrivalDispatch} = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      <div className="mt-[5rem] grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {cartState.length > 0 ? cartState.map((product, index) => {
          const { name, price, url, quantity, id, category } = product;
        return (
          <div key={id} className="flex bg-gray-200 m-2  rounded-lg overflow-hidden w-[90%] mx-auto relative">
            <img src={url} alt={name} className="w-[100px]"/>
            <div className="mx-2 p-2">
              <h2 className="font-bold text-[#303030] text-xl">{name}</h2>
              <h3 className="text-[#303030] font-medium">
                Item Price: <span className="text-yellow-500">{price} $</span>
              </h3>
              <h3 className="text-[#303030] font-medium flex items-center">
                Quantity:
                <span className="flex items-center w-20 justify-between ml-2">
                  <FiMinus className="box-content bg-red-400 text-white text-base p-1 rounded hover:bg-red-500 cursor-pointer" onClick={() => cartDispatch({type: "DEC_QUANTITY", payload: index})}/>{" "}
                  {quantity}{" "}
                  <BsPlusLg className="box-content bg-green-400 text-white text-base p-1 rounded hover:bg-green-500 cursor-pointer" onClick={() => cartDispatch({type: "INC_QUANTITY", payload: index})}/>
                </span>
              </h3>
            <button className="bg-red-500 my-2 px-4 py-1 text-medium text-white rounded hidden sm:inline-block sm:absolute top-[30%] right-4 hover:bg-red-400 active:bg-red-600" onClick={() => {
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
            <button className="bg-red-500 text-white p-1 rounded absolute top-2 right-2 sm:hidden" onClick={()=>{
              cartDispatch({type: "REMOVE_PRODUCT", payload: id})
              if(category === "Female") {
                ladiesDispatch({type: "REMOVE_FROM_CART", payload: id})
              } else if(category === "Male") {
                menDispatch({type: "REMOVE_FROM_CART", payload: id})
              } else if (category === "NewArrival") {
                newArrivalDispatch({type: "REMOVE_FROM_CART", payload: id})
              }
            }}><ImBin /></button>
          </div>
        );
    }) : <div className="w-screen h-[80vh] grid place-items-center">
            <h2 className="text-xl lg:text-5xl font-bold text-[#5e5e5e] opacity-50">Your Cart is empty!</h2>
      </div>}
    </div>
    </div>
  );
};

export default Cart;
