const animais = (require('./repository/animalRepository'))
const { json } = require('express');
const express = require('express');
const zoo = require('./repository/animalRepository');

const { addAnimal, getAnimal } = require('./repository/animalRepository');
const app = express();
const port = 3000;

var path = require('path')
app.set('view engine', 'ejs');
app.set('views', './views');

  
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/zoo', (req, res) => {
    const newAnimal = {
        animal: req.body.animal,
        name: req.body.name
    };
    addAnimal(newAnimal);
    res.render('animal/lista.ejs', { animals: getAnimal() });
});

app.get('/zoo', (req, res) => {
  const nome = req.query.name;
  const tipoAnimal = req.query.animal;
  let animais = zoo.getAnimal();


  if (tipoAnimal !== 'TODOS') {
    animais = animais.filter(a => a.animal === tipoAnimal);
  }

  if (nome) {
    animais = animais.filter(a => a.name.toLowerCase().includes(nome.toLowerCase()));
  }

  res.render('animal/busca.ejs', { animals: animais });
});



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});