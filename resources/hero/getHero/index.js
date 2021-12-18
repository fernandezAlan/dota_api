var mongoose = require("mongoose");
var Hero = mongoose.model("hero");

const getHero = (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    Hero.findById(Number(req.params.id), function(err, Hero) {
        if(err) {
            console.log('error',err)
            return res.send(err)
        }
        else{
            res.send(Hero)
        }
    })

}
module.exports = getHero
