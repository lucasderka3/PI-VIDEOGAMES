const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;

const getGameByName = async (req, res) => {
  try {
    const { name } = req.query;

    // Busca en la base de datos
    const dbResults = await Videogame.findAll({
      where: {
        name: name
      },
      include: [Genre]
    });

    // Busca en la API
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
    );

    // Procesa los resultados de la base de datos
    const dbGames = dbResults.map((result) => ({
      id: result.id,
      name: result.name,
      description: result.description,
      image: result.image, 
      released: result.released,
      platforms: result.platforms.split(','), 
      rating: result.rating,
      genres: result.genres.map((g) => g.name)
    }));

    // Procesa los resultados de la API
    const apiGames = data.results.map((result) => ({
      id: result.id,
      name: result.name,
      description: result.description,
      image: result.background_image,
      released: result.released,
      platforms: result.platforms.map((p) => p.platform.name),
      rating: result.rating,
    }));

    // Combina los resultados
    const allGames = dbGames.concat(apiGames);

    if (allGames.length > 0) {
      // Limita la respuesta a los primeros 15 resultados
      const limitedResults = allGames.slice(0, 15);
      return res.status(200).json(limitedResults);
    } else {
      return res.status(404).json({ message: 'No se encontraron videojuegos con el nombre proporcionado.' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getGameByName,
};