const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


