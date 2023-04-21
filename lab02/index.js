const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello')
})

//vetor animais

zoo = [
  {animal: "DOG", name:"Lucky"}
  ,{animal:"CAT", name:"Hercules"}
  ,{animal:"BIRD", name:"Tweety"}
  ,{animal:"DOG", name:"Spiff"}
  ,{animal:"CAT", name:"Tom"}
  ,{animal:"BIRD", name:"Road Runner"}
]

//get roat /zoo

app.get('/zoo', (req, res) => {
  res.send(zoo)
})


//metodo post rota mirror

app.post('/mirror', function (req, res, next) {
  console.log(req.body)
  res.send(req.body)
})

//busca animais pelo campo nome

app.get('/zooNome', (req, res) => {
  const queryName = req.query.name
  let result = zoo

  if (queryName) {
    result = result.filter(animal => animal.name.toLowerCase().includes(queryName.toLowerCase()))
  }

  res.send(result)
})

//busca animais pelo campo animal

app.get('/zooAnimal', (req, res) => {
  const queryAnimal = req.query.animal
  let result = zoo

  if (queryAnimal) {
    result = result.filter(animal => animal.animal.toLowerCase().includes(queryAnimal.toLowerCase()))
  }

  res.send(result)
})


//metodo get parametro de consulta

app.get('/querytojson', (req, res) => {
  console.log(req.query);
  res.send(req.query);
})

//metodo get parametro de caminho

app.get('/paramtojson/name/:name/role/:role', (req, res) => {
  console.log(req.params);
  res.send(req.params);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


