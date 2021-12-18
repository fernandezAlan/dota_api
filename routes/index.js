const express =require( 'express')
const deleteAllHeroes =require( '../resources/hero/deleteHero')
const addHero =require( '../resources/hero/postHero')
const getAllHeroes =require( '../resources/hero/getAllHeroes')
const getHero =require( '../resources/hero/getHero')

const router = express.Router();

router.delete('/api/heroes',deleteAllHeroes);
router.post('/api/createHero',addHero);
router.get('/api/allHeroes',getAllHeroes);
router.get('/api/hero/:id',getHero);

module.exports = router