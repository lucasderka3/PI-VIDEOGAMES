const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getVideogame } = require('../controllers/getVideogame');
const { getGameById } = require('../controllers/getGameById');
const { postVideogame } = require('../controllers/postVideogame');
const { getGenre } = require('../controllers/getGenre');
const { getGameByName } = require('../controllers/getGameByName');
const { getPlatforms } = require('../controllers/getPlatforms');

const router = Router();

/** Routes*/
router.get('/videogames', getVideogame);
router.get('/videogames/name', getGameByName);
router.get('/videogames/:id', getGameById);
router.post('/videogames', postVideogame);
router.get('/genres', getGenre);
router.get('/platforms', getPlatforms);


module.exports = router;
