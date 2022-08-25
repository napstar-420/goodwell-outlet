import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {TiTick} from 'react-icons/ti'

const LadiesCategory = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Casual Top",
      desc: "Casual pink top",
      price: 20,
      url: "https://5.imimg.com/data5/WS/DS/MY-28162106/ladies-top-500x500.jpg",
      addedToCart: false,
    },
    {
      id: 2,
      name: "Queen Top",
      desc: "Wine Queen top for women",
      price: 35,
      url: "https://m.media-amazon.com/images/I/61G4kcTPPiL._UL1400_.jpg",
      addedToCart: false,
    },
    {
      id: 3,
      name: "Bell Bottom Pants",
      desc: "Black leisure trousers for women",
      price: 50,
      url: "https://image.made-in-china.com/202f0j00BHCfdEwGEMbl/Bell-Bottom-Pants-for-Ladies-Black-Color-Leisure-Trouser.jpg",
      addedToCart: false,
    },
    {
      id: 4,
      name: "Blue Jeans",
      desc: "Slim fit regular blue jeans for women",
      price: 25,
      url: "https://outfitideashq.com/wp-content/uploads/2014/07/women-wearing-super-skinny-jeans.jpeg",
      addedToCart: false,
    },
    {
      id: 5,
      name: "Stylish Skirt",
      desc: "Red fashion skirt for women",
      price: 25,
      url: "https://4.imimg.com/data4/CV/OX/MY-2428689/ladies-skirt-500x500.jpg",
      addedToCart: false,
    },
    {
      id: 6,
      name: "Pink Casual Shoes",
      desc: "Summer pink casual shoes for women",
      price: 50,
      url: "https://i.pinimg.com/originals/ab/5a/6f/ab5a6f9869d2938d8abe5d39eab3ebea.jpg",
      addedToCart: false,
    },
  ]);
  console.log(products)
  return (
    <div>
      <div className="m-5 flex justify-between max-w-[1500px] 2xl:mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-[#303030]">
          Feminine Products
        </h2>
        <button className="text-base font-medium text-[#3d3d3d] border-2 border-[#303030] px-4 py-0 rounded-full hover:bg-[#3d3d3d] hover:text-white transition-all">
          Browse all
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 max-w-[1500px] mx-auto">
        <div className="relative bg-[url('https://hips.hearstapps.com/elleuk.cdnds.net/17/36/1504703830-gettyimages-507041520.jpg')] bg-cover m-2 col-start-1 col-end-3 md:col-end-4 row-start-1 row-end-3 h-[20em] md:h-auto grid place-items-center after:content-[''] after:w-[100%] after:h-[100%] after:bg-black after:opacity-20 md:after:opacity-50 after:absolute">
          <div className="z-10">
            <h2 className="mx-auto w-max text-white text-5xl font-bold">
              Women Fashion
            </h2>
            <button className="text-xl font-semibold text-white border-2 border-white px-4 py-1 rounded hover:bg-[#3d3d3d] hover:text-white transition-all flex items-center mx-auto mt-2">
              View All <BsFillArrowRightCircleFill className="ml-2" />
            </button>
          </div>
        </div>
        {products.map((product, index) => {
          const { id, name, desc, price, url, addedToCart } = product;
          return (
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
                    let newProducts = [...products]
                    newProducts[index].addedToCart = true;
                    setProducts(newProducts)
                  }}
                >
                  Add to cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LadiesCategory;
