//Async - Await el await siempre dentro de un async

const getImagen = async() => {
    try{
        const apiKey = 'rmJS6RYG0cO6qKLRcrHP3lgKB1KHckDY';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();   
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
        
    }
    catch(error){
        console.error(error);
    }

}


getImagen();
