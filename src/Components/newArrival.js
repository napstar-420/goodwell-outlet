import React, { useContext } from 'react'
import {BiHeart} from 'react-icons/bi'
import { StoreContext } from '../App.js'
import { TiTick } from 'react-icons/ti'

const NewArrival = () => {
  const {cartDispatch, newArrivalState, newArrivalDispatch} = useContext(StoreContext)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:w-[60%]'>
      {
        newArrivalState.map((product, index) => {
          const {id, name, desc, url, price, addedToCart, category} = product;
          return(
            <div key={id} className="m-2 rounded-2xl overflow-hidden p-1">
              <div
                style={{ background: `url(${url})`, backgroundSize: "cover" }}
                className="w-[100%] h-[10em]"
              />
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-[#303030] mx-1 mt-2">
                  {name}
                </h2>
                <BiHeart className="text-3xl mt-2 cursor-pointer" />
              </div>
              <p className="text-sm text-[#5e5e5e] font-normal mx-1">{desc}</p>
              <div>
                <h2 className="text-sm text-yellow-500 font-medium mx-1">
                  Price <span className="text-xl">{price}</span> $
                </h2>
              </div>
              {addedToCart ? (
                <button className="addedToCartBtn">Added <TiTick className="text-2xl ml-1"/></button>
              ) : (
                <button
                  className="addToCartBtn"
                  onClick={() =>{
                    newArrivalDispatch({type: "ADD_TO_CART", payload: index})
                    cartDispatch({type: "ADD_PRODUCT", payload:{name, desc, price, url, id, quantity: 1, category}})
                  }}
                >
                  Add to cart
                </button>
              )}
            </div>
          )
        })
      }
    </div>
  )
}

export default NewArrival