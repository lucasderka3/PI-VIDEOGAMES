const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getVideogame } = require('../controllers/getVideogame');
const { getGameByName } = require('../controllers/getGameByName');
const { getGameById } = require('../controllers/getGameById');
const { getGenre } = require('../controllers/getGenre');
const { postVideogame } = require('../controllers/postVideogame');

const router = Router();

/** Routes*/
router.get('/videogames', getVideogame);
router.get('/videogames/name', getGameByName);
router.get('/videogames/:id', getGameById);
router.post('/videogames', postVideogame);
router.get('/genres', getGenre);



module.exports = router;
