
var mongoose = require("mongoose");
var Heroes = mongoose.model("hero");

const findAllHeroes=(req,res)=>{
  Heroes.find(function (err, heroes) {
    if (err) res.send(500, err.message);
    else res.status(200).jsonp(heroes);
    
  });
}
module.exports = findAllHeroes
 
