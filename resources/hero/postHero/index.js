var mongoose = require("mongoose");
var Hero = mongoose.model("hero");

const addHero = (req,res)=>{
  console.log("typeof",typeof req.body.id);
  var hero = new Hero(req.body);

  hero.save(function (err, hero) {
    if (err) return res.status(500).send(err.message);
    res.status(200).jsonp(hero);
  });
}
module.exports = addHero

 