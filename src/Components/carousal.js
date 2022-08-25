/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import img1 from '../Images/timeline_pic_1.png'
import img2 from '../Images/timeline_pic_2.png'
import img3 from '../Images/timeline_pic_3.png'
import {BsCaretLeftSquareFill, BsCaretRightSquareFill} from 'react-icons/bs'

const Carousal = () => {
    const [index, setIndex] = useState(0);
    const carousalImages = [img1, img2, img3]
    useEffect(()=>{
        if(index === carousalImages.length){
            setIndex(0)
        }
        if(index < 0){
            setIndex(2)
        }
    }, [index])
    useEffect(()=>{
        let slider = setTimeout(()=>setIndex(index + 1), 3000);
        return () => {
            clearInterval(slider);
          };
    }, [index])
  return (
    <div className='w-[100%] h-max mx-auto flex relative overflow-hidden'>
        {
            carousalImages.map((img, i) => {
                if(i === index){
                    return (
                        <img key={i} src={img} alt="Carousal" className={`w-[100%] relative translate-x-0  transition-all z-10`}/>
                    )
                }
                if(i === 0  && index === carousalImages.length - 1){
                    return (
                        <img key={i}  src={img} alt="Carousal" className={`w-[100%] absolute translate-x-[100%] transition-all z-0`}/>
                    )
                }
                if (i === carousalImages.length - 1 && index === 0) {
                    return (
                        <img key={i} src={img} alt="Carousal" className={`w-[100%] absolute translate-x-[-100%] transition-all z-0`} />
                    )
                }
                if(i < index) {
                    return (
                        <img key={i}  src={img} alt="Carousal" className={`w-[100%] absolute translate-x-[-100%] transition-all z-0`} />
                    )
                }
                return  (
                    <img key={i}  src={img} alt="Carousal" className={`w-[100%] absolute translate-x-[100%] transition-all z-0`} />
                )
                
            })
        }
        <button className='text-xl lg:text-4xl z-20 absolute top-[40%] lg:top-[50%] left-5 lg:left-10 text-white' onClick={()=>setIndex(index - 1)}><BsCaretLeftSquareFill className='hover:text-3xl lg:hover:text-5xl transition-all active:translate-y-1'/></button>
        <button className='text-xl lg:text-4xl z-20 absolute top-[40%] lg:top-[50%] right-5 lg:right-10 text-white' onClick={()=>setIndex(index + 1)}><BsCaretRightSquareFill className='hover:text-3xl lg:hover:text-5xl transition-all active:translate-y-1'/></button>
    </div>
  )
}

export default Carousal