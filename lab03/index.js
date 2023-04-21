const animais = (require('./repository/animalRepository'))
const { json } = require('express');
const express = require('express');
const { addAnimal, getAnimal } = require('./repository/animalRepository');
const app = express();
const port = 8080;

app.use(express.static('public'));
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

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});