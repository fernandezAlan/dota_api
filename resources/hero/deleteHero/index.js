var mongoose = require("mongoose");
var Hero = mongoose.model("hero");

const deleteAllHeroes = (req,res)=>{
    Hero.remove({}, function(err, result) {
        if (err) {
          console.err(err);
        } else {
          res.json(result);
        }
      });
}
module.exports= deleteAllHeroes
