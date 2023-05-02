const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5496;
const chef = require('./data/chef.json')
const food = require('./data/food.json')

app.use(cors());

app.get("/", (req, res) => {
  res.send("all data will be come here");
});

app.get("/chef", (req, res)=>{
    res.send(chef)
})

app.get("/food", (req, res)=>{
    res.send(food)
})

app.get('/chef/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
      res.send(chef)
  }
  else {
      const chefInfo = chef.filter(cf => parseInt(cf.id) === id);
      res.send(chefInfo)
  }

})

app.listen(port, () => {
  console.log(`all console can be see here ${port}`);
});
