const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
const port = 8080

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/PostForm.html')
})

app.post('/mirror', (req, res) => {
  const firstName = req.body.FirstName;
  const lastName = req.body.LastName;

  const html = fs.readFileSync(path.join(__dirname, 'mirror.html'), 'utf8');

  const updatedHtml = html
    .replace('{firstName}', firstName)
    .replace('{lastName}', lastName);

  res.send(updatedHtml);
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


