import {getGif} from "../helpers/getGif.js";
import {useEffect, useState} from "react";

export const useFecthGif = (category) => {
    console.log(category)
    const [imageGif, setImage] = useState([])
    const GifImage= async ()=>{
        const newImage=await getGif(category);
        setImage(newImage);
    }

    useEffect(() => {
        GifImage();
    }, []);

  return{
      imageGif,
          isLoading:false
  }
}
