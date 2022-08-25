import React, { useContext } from 'react'
import { BiHeart } from 'react-icons/bi';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { StoreContext } from '../App';
import {TiTick} from 'react-icons/ti';

const MenCategory = () => {
  const {mensProductState, menDispatch, cartDispatch} = useContext(StoreContext)
  return (
    <div>
      <div className="m-5 flex justify-between max-w-[1500px] 2xl:mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-[#303030]">Masculine Products</h2>
        <button className="text-base font-medium text-[#3d3d3d] border-2 border-[#303030] px-4 py-0 rounded-full hover:bg-[#3d3d3d] hover:text-white transition-all">
          Browse all
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 max-w-[1500px] mx-auto">
        <div className="relative bg-[url('https://magazinevogue.com/wp-content/uploads/2021/01/Mens-Fashion-2021-Menswear-Clothing-2021-Brands-15.jpg')] bg-cover m-2 col-start-1 col-end-3 md:col-start-3 md:col-end-5 lg:col-start-4 lg:col-end-7 row-start-1 row-end-3 h-[20em] md:h-auto grid place-items-center after:content-[''] after:w-[100%] after:h-[100%] after:bg-black after:opacity-20 md:after:opacity-50 after:absolute">
            <div className='z-10'>
                <h2 className="mx-auto w-max text-white text-5xl font-bold">Mens Week</h2>
                <button className="text-xl font-semibold text-white border-2 border-white px-4 py-1 rounded hover:bg-[#3d3d3d] hover:text-white transition-all flex items-center mx-auto mt-2">View All <BsFillArrowRightCircleFill className="ml-2"/></button>
            </div>
        </div>
        {mensProductState.map((product, index) => {
          const { id, name, desc, price, url, addedToCart, category } = product;
          return (
            <div key={id} className="m-2 rounded-2xl overflow-hidden p-1">
              <div style={{ background: `url(${url})`, backgroundSize: "cover" }} className="w-[100%] h-[10em]"/>
              <div className="flex justify-between items-center">
                <h2 className='text-xl font-bold text-[#303030] mx-1 mt-2'>{name}</h2>
                <BiHeart className="text-3xl mt-2 cursor-pointer" />
              </div>
              <p className='text-sm text-[#5e5e5e] font-normal mx-1'>{desc}</p>
              <div>
                <h2 className='text-sm text-yellow-500 font-medium mx-1'>Price <span className="text-xl">{price}</span> $</h2>
              </div>
              {addedToCart ? (
                <button className="addedToCartBtn">Added <TiTick className="text-2xl ml-1"/></button>
              ) : (
                <button className="addToCartBtn" onClick={()=>{
                  cartDispatch({type: "ADD_PRODUCT", payload: {name, desc, id, price, url, quantity: 1, category}})
                  menDispatch({type: "ADD_TO_CART", payload: index})}
                }>
                  Add to cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default MenCategory