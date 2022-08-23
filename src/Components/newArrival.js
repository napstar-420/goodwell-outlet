import React from 'react'
import {newArrival} from '../data/newArrival.js'
import {BiHeart} from 'react-icons/bi'

const NewArrival = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 md:w-[60%]'>
      {
        newArrival.map((product, index) => {
          const {id, name, desc, discount, url} = product;
          return(
            <div key={id} className="m-2 border-5 rounded-2xl border-[#303030] overflow-hidden p-1">
              <div className='h-[10em] w-[100%] rounded-lg' style={{background: 'url(' + url + ')', backgroundSize: 'cover'}}/>
              <h2 className='text-xl font-bold text-[#303030] mx-1 mt-2'>{name}</h2>
              <p className='text-sm text-[#5e5e5e] font-medium mx-1'>{desc}</p>
              <div className='w-[100%] my-2 flex items-center'>
                <button className='flex-1 border-2 border-[#303030] text-center text-white bg-[#303030] font-semibold uppercase p-1 hover:bg-transparent hover:text-[#303030]'>Add to Cart</button>
                <BiHeart className='text-4xl p-1 cursor-pointer'/>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default NewArrival