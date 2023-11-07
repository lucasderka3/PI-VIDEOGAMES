const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;

const getVideogame = async (req, res) => {
    let videogames = []; // Array que se va a mostrar cuando solicitemos /videogames
    const pageSize = 15; // Cantidad de juegos por página
    const pagesToFetch = 7; // Paginas a recorrer

  try {
    
        const gameDB = await Videogame.findAll({include: Genre});
        if(gameDB){
            videogames = gameDB.map((g) => ({
              id: g.id,
              name: g.name,
              description: g.description,
              released: g.released,
              platforms: g.platforms,
              rating: g.rating,
              image: g.image,
              genres: g.genres.map((g) => g.name)
            }))
        }
     
        for (let page = 1; page <= pagesToFetch; page++) {
          const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`);
    
          // Verifica si la respuesta tiene datos
          if (response.data && response.data.results) {
            videogames.push(...response.data.results.map((game) => ({
              id: game.id,
              name: game.name,
              description: game.description_raw,
              released: game.released,
              platforms: game.platforms.map((plat) => plat.platform.name),
              rating: game.rating,
              image: game.background_image,
              genres: game.genres.map((genre) => genre.name)
            })));
          }
        }
    

    return res.status(200).json(videogames);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Hubo un error al obtener datos de la API.");
  }
};

module.exports = {
  getVideogame,
};
