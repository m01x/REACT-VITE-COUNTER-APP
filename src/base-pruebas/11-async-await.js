require('dotenv').config();

export const getImagen = async () => {
  try {
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=2${process.env.VITE_BASE_APIKEY}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    return url;
  } catch (error) {
    return 'No se encontro la imagen';
  }
};

getImagen();
