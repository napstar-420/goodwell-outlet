import React, { useState } from 'react'
import {IoIosMail} from 'react-icons/io'
import {BsTelephoneFill, BsHandbag} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {ImCross} from 'react-icons/im'
import {BiHeart, BiSearch} from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
    const [navSelected, setNavSelected] = useState(false)
  return (
    <nav>
        <ul id="nav_top" className="hidden lg:flex justify-around items-center  bg-[#5E5E5E] text-white">
            <li> Free Shipping on order above 150$</li>
            <li className='flex items-center hover:underline cursor-pointer'><BsTelephoneFill className='mr-1'/> +1-123-456-789</li>
            <li className='flex items-center hover:underline cursor-pointer'><IoIosMail className='text-lg mr-1'/> Official@goodwilloutlet.com</li>
            <li className='flex items-center hover:underline cursor-pointer'><MdLocationOn className='text-lg mr-1'/> California / USA</li>
        </ul>
        <ul id='nav_bottom' className={`bg-[#303030] py-2 px-4 flex lg:flex-row flex-col lg:items-center lg:justify-between w-screen  ${navSelected ? `h-screen` : `h-[3.5rem]`} overflow-hidden transition-all lg:h-max`}>
            <li className='flex items-center'><GiHamburgerMenu className='lg:hidden text-white text-3xl mr-2 hover:opacity-50' onClick={()=>setNavSelected(!navSelected)}/><h2 className='text-3xl font-bold text-white'>Goodwill Outlet</h2></li>
            <ul className='flex text-white lg:flex-row flex-col my-2 lg:my-0'>
            <li className='border-[#5E5E5E] border-2 p-1 rounded-full flex items-center justify-between lg:hidden  mt-2 lg:mt-0'>
                <input type="text" className='bg-[#303030] px-1 rounded-full mr-1 placeholder:text-white focus:outline-none focus:bg-[#5E5E5E] text-white focus:border-none' placeholder='Search store...'/>
                <BiSearch className='text-[#303030] bg-white rounded-full p-1 text-2xl font-bold hover:bg-[#5E5E5E] transition-all hover:text-white cursor-pointer'/>
            </li>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer underline lg:no-underline underline-offset-4 '>HOME</li>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer underline lg:no-underline underline-offset-4 '>MEN</li>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer underline lg:no-underline underline-offset-4 '>WOMEN</li>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer underline lg:no-underline underline-offset-4 '>KIDS</li>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer underline lg:no-underline underline-offset-4 '>CONTACT</li>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer underline underline-offset-4 lg:hidden'>FAVORITES</li>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer underline underline-offset-4 lg:hidden'>MY CART</li>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer underline underline-offset-4 lg:hidden'>ABOUT US</li>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer underline underline-offset-4 lg:hidden'>TERMS & CONDITIONS</li>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer underline underline-offset-4 lg:hidden'>PRIVACY POLICY</li>
                <button className='text-lg lg:text-base px-2 py-2 lg:py-0 hover:opacity-50 cursor-pointer w-max mx-auto rounded-full border-2 border-white lg:hidden' onClick={()=> setNavSelected(false)}><ImCross className='text-center'/></button>
                <li className='text-lg lg:text-base px-1 py-2 lg:py-0 hover:opacity-50 cursor-pointer text-center lg:hidden'>NAPSTAR &copy; | 2022</li>
            </ul>
            <ul className='flex items-center text-white lg:relative absolute right-2 '>
                <BiHeart className='text-3xl font-bold'/>
                <li className="w-max after:content-['0'] after:text-white after:absolute after:-top-1 after:-right-1 after:bg-blue-800 after:rounded-full after:py-[2px] after:px-[5px] after:text-sm"><BsHandbag className="text-3xl font-bold "/></li>
            </ul>
            <li className='border-[#5E5E5E] border-2 p-1 rounded-full items-center justify-between hidden lg:flex'>
                <input type="text" className='bg-[#303030] px-1 rounded-full mr-1 placeholder:text-white focus:outline-none focus:bg-[#5E5E5E] text-white focus:border-none' placeholder='Search store...'/>
                <BiSearch className='text-[#303030] bg-white rounded-full p-1 text-2xl font-bold hover:bg-[#5E5E5E] transition-all hover:text-white cursor-pointer'/>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar