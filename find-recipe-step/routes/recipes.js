var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/step/:id', (req, res) => {
  const id = req.params.id;
  let recipe = null;
   recipes.forEach(r =>{
    if(r.id == id){
      recipe = r;
    }
  });
  if (recipe == null) {
    return res.status(400).send("NOT_FOUND");
  }
  let { elapsedTime = 0 } = req.query;
  let time = 0;
  let index = 0;
  recipe.timers.forEach(timer => {
    time += timer;
    if(time >= elapsedTime){
      return;
    }
    index++;
  });
  res.send({index});
});

module.exports = router;