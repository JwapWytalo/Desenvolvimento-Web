const animais = (require('./repository/animalRepository'))
const { json } = require('express');
const express = require('express');
const zoo = require('./repository/animalRepository');

const { addAnimal, getAnimal } = require('./repository/animalRepository');
const app = express();
const port = 8080;

//tentando aplicar css no ejs
var path = require('path')
app.use('/views', express.static(path.join(__dirname, "./views")));
app.set('view engine', 'ejs');

  
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
  const nome = req.query.nome;
  const tipoAnimal = req.query.animal;
  let animais = zoo.getAnimal();

  if (nome) {
    animais = animais.filter(animal => animal.name.toLowerCase().includes(nome.toLowerCase()));
  }

  if (tipoAnimal !== 'Todos') {
    animais = animais.filter(a => a.animal === tipoAnimal);
  }

  res.render('animal/busca.ejs', { animals: animais });
});



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});