import React, { useContext } from "react";
import { StoreContext } from "../App";
import Navbar from "./Sub_Components/navbar";
import {ImBin} from 'react-icons/im'

const Cart = () => {
  document.title = 'Goodwell Outlet | Cart'
  const { cartState, cartDispatch, ladiesDispatch, menDispatch, newArrivalDispatch} = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      <div className="mt-[5rem] grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        {cartState.length > 0 ? cartState.map((product, index) => {
          const { name, price, url, id, category } = product;
        return (
          <div key={id} className="flex bg-gray-200 m-2  rounded-lg overflow-hidden w-[90%] mx-auto relative">
            <img src={url} alt={name} className="w-[100px]"/>
            <div className="mx-2 p-2">
              <h2 className="font-bold text-[#303030] text-xl">{name}</h2>
              <h3 className="text-[#303030] font-medium">
                Item Price: <span className="text-yellow-500">{price} $</span>
              </h3>
              <form className="flex">
                <label htmlFor="quantity" className="text-[#303030] font-medium flex items-center">Quantity:</label>
                <select name="quantity" className="ml-1 px-4">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </form>
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
