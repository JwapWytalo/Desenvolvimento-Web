const {json} = require('express');
const express = require('express');
const { addCategoria, getCategoria } = require('./repository/BDCategorias');
const categoriaR = (require('./repository/BDCategorias'));

const app = express();
const port = 8080;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/categorias', (req, res) => {
  res.render('categorias', {categorias: getCategoria()});
});

app.get('/categoria-deletar', (req, res) => {
  const chave = req.query.chave;
  categoriaR.deleteCategoria(chave);
  res.redirect('/categorias');
});


app.post('/categoria-salvar', (req, res) => {
    const newCategoria = {
      chave : req.body.chave,
      valor : req.body.valor
    };
    addCategoria(newCategoria);
    res.redirect('/categorias');
});

app.get('/produto-editar ', (req, res) => {
/**que recebe o id do produto a ser editado como parâmetro de consulta 
 * (ex: /produto-editar?id=10 para editar o produto de ID 10)
/*/
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});