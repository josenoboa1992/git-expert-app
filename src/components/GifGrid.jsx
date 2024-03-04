
import {useEffect, useState} from "react";
import {GifItem} from "./GifItem.jsx";
import {getGif} from "../helpers/getGif.js";


export const GifGrid = ({category}) => {

    const [image, setImage] = useState([])

    const GifImage= async ()=>{
        const newImage=await getGif(category);
        setImage(newImage);
    }

    useEffect(() => {
        GifImage();
    }, []);



  return(
      <>
        <h1>{category}</h1>

          <div className="card-grid">
              {image.map(({id,title,url})=>(
                <GifItem />
              ))}
          </div>

      </>
  )
}
