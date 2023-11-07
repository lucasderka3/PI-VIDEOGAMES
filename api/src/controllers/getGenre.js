const axios = require('axios');
const { Genre } = require('../db');
const { API_KEY } = process.env;

const getGenre = async (req, res) => {
    try {
        const { data } = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);

        data.results.map((gen) => {
            Genre.findOrCreate({
                where: { name: gen.name}
            })
        })

        const genresDB = await Genre.findAll({order: [['name']]});
        return res.status(200).json(genresDB);
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
};

module.exports = {
    getGenre
}