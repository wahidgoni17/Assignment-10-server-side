const express = require("express");
const cors = require("cors")
const app = express();
const port = process.env.PORT || 5496;
const chef = require('./data/chef.json')

app.use(cors());

app.get("/", (req, res) => {
  res.send("all data will be come here");
});

app.get("/chef", (req, res)=>{
    console.log(chef)
    res.send(chef)
})

app.listen(port, () => {
  console.log(`all console can be see here ${port}`);
});
