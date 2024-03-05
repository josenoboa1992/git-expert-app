
import {GifItem} from "./GifItem.jsx";
import {useFecthGif} from "../hooks/useFecthGif.js";


export const GifGrid = ({category}) => {

    const {imageGif,isLoading}=useFecthGif(category)

  return(
      <>
        <h1>{category}</h1>
          {isLoading && <h1>Cargando...</h1>}
          <div className="card-grid">
              {imageGif.map((imagen)=>(
                <GifItem key={imagen.id} {...imagen}/>
              ))}
          </div>

      </>
  )
}
