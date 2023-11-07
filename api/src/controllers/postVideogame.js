const { Videogame, Genre } = require('../db');

const postVideogame = async(req, res) => {
    try {
        const { name, description, image, released, rating, platforms, genres } = req.body;
        
        if(!name || !description || !platforms || !image || !released || !rating){
            return res.status(400).send('All fields are required')
        };

        //Creo el videojuego para posterior asociarlo a un genero de mi DB
        const gameCreated = await Videogame.create({
                name: name,
                description: description,
                image: image,
                released: released,
                rating: rating,
                platforms: platforms
        })

        // Busco los generos en la DB por su nombre
        const genreInstances = await Genre.findAll({
            where: {
                name: genres.name
            }
        })

        //Asocio los generos al videojuego
        await gameCreated.setGenres(genreInstances);

        return res.status(200).json(gameCreated);

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {
    postVideogame
}