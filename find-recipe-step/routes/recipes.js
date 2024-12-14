var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/step/:id', (req, res) => {
  const id = req.params.id;
  const recipe = recipes[id - 1];
  if (recipe == null) {
    return res.status(400).send("NOT_FOUND");
  }
  let { elapsedTime = 0 } = req.body.elapsedTime;
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

