import {useState} from "react";
import {AddCategory} from "./AddCategory.jsx";
import {GifGrid} from "./components/GifGrid.jsx";

export const GifExpertApp = () => {
    const [categoria, setCategoria] = useState([])

    const onAddCategory=(onNewEvent)=>{
        if (categoria.includes(onNewEvent)) return;
        setCategoria([onNewEvent,...categoria]);
    }


  return (
      <>
       <h1>GifExpertApp</h1>
          <AddCategory onAddCategory={onAddCategory}/>

          <ol>
              {categoria.map(categoria=>(
            <GifGrid
                key={categoria}
                category={categoria}/>

                  )
              )}
          </ol>
      </>
  )
}