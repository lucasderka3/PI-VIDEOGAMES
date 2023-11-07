const axios = require('axios');
const { Videogame, Genre} = require('../db');
const { API_KEY } = process.env;

const getGameById = async(req, res) => {
    try {
        const { id } = req.params;
        
        if(!Number(id)){
            const gameDB = await Videogame.findByPk(id, {include: [{model: Genre, attributes: ['id', 'name']}]});
            if(gameDB){
                const game = {
                    id: gameDB.id,
                    name: gameDB.name,
                    description: gameDB.description,
                    released: gameDB.released,
                    platforms: gameDB.platforms,
                    rating: gameDB.rating,
                    image: gameDB.image,
                    genres: gameDB.genres.map((g) => g.name)
                }
                return res.status(200).json(game);
            }
        } else{
            const { data } = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

            if(data.id){
                const videogame = {
                    id: data.id,
                    name: data.name,
                    description: data.description_raw,
                    released: data.released,
                    platforms: data.platforms.map((plat) => plat.platform.name).join(" | "),
                    rating: data.rating,
                    image: data.background_image,
                    genres: data.genres.map((gen) => gen.name).join(" | ")
                }
                return res.status(200).json(videogame);
            }
        }

        return res.status(404).send('Not found');
    } catch (error) {
        return res.status(500).json({error: error.message});
    }   
};


module.exports = {
    getGameById
}