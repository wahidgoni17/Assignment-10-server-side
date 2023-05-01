const express = require('express')
const app = express()
const port = process.ENV.PORT || 5496

app.get('/', (req, res)=>{
    res.send("all data will be come here")
})
app.listen(port, ()=>{
    console.log(`all console can be see here ${port}` )
})