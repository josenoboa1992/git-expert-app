export const getGif= async (category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=ykGi1boYriETroETkAjND9ApI2CznGkj&q=${category}&limit=20`
    const resp=await fetch(url);
    const {data=[]}=await resp.json();
    const gift= data.map(img=> ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gift;
}
