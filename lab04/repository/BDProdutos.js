var produtos = []

function addProdutos(produto){
    produtos.push(produto);
}

function getProdutos(){
    return produtos;
}

function getProdutoId(id) {
    return produtos.find(produto => produto.id === id);
}
  

exports.getProdutoId = getProdutoId;
exports.addProdutos = addProdutos;
exports.getProdutos = getProdutos;