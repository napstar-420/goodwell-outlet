import React from 'react'
import {MdMessage} from 'react-icons/md'

const ContactUs = () => {
  return (
    <div className='bg-[#303030] text-white flex flex-col sm:flex-row justify-between p-10'>
        <h3 className='text-2xl font-semibold'>Have any queries feel free to contact us </h3>
        <button className='bg-blue-500 px-4 py-2 my-4 sm:my-0 font-medium rounded flex items-center w-max'>Contact <MdMessage className='text-xl ml-2'/></button>
    </div>
  )
}

export default ContactUs