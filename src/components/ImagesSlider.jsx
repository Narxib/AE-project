import { useState,useEffect } from "react"
import ArrowIcon from "../assets/ArrowIcon"
import allImages from "../utils/allImages"

export default function ImagesSlider(){
    const images= allImages()
    const [pic,setPic] = useState(0)

    useEffect(()=>{
        setPic(0)
    },[])

    function nextPic(){
        if(pic + 1 > images.length -1){
            setPic(0)
            
        }else{
            setPic(pic+1)
        }
    }

    function lastPic(){
         if(pic-1 < 0){
            setPic(images.length - 1)
        }else{
            setPic(pic-1)
        }
    }

    return(
        <div className="flex relative flex-nowrap justify-between items-center bg-green-200 overflow-hidden h-2/3 w-2/3">
            <button onClick={lastPic} className="flex justify-center h-full hover:bg-white/30 items-center text-2xl pl-4 font-bold z-10"><ArrowIcon className="rotate-[130deg]"/></button>
            {images.map((img)=>{
                return(
                <img key={img.id} className="w-full flex animate-slide-right box-border absolute ease-in  overflow-auto h-auto" src={images[pic].src}/>
                )
                
            })}
            <button onClick={nextPic} className="flex text-2xl pl-4 justify-center items-center h-full  hover:bg-white/30 font-bold z-10 "><ArrowIcon className="rotate-[-45deg]"/></button>
        </div>
    )
}