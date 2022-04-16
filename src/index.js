const express = require('express')
const app = express()
const port = 8000
const path = require("path")

const saticpath = path.join(__dirname, "../public"); 
app.use(express.static(saticpath));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})