export const GifGrid = ({category}) => {

  const getGif= async ()=>{
      const url=`https://pokeapi.co/api/v2/pokemon/bulbasaur`
       const resp=await fetch(url);
      console.log(resp)
  }

  getGif();
  return(
      <>
      <h2>{category}</h2>


      </>
  )
}