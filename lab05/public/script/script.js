var Campos = []


function adicionarCampo() {
    const campoPersonalizado = document.getElementById("campos_customizados").value;
    const listaCampos = document.getElementById("campos_personalizados");
    const itemLista = document.createElement("li");
    itemLista.innerText = campoPersonalizado;
    listaCampos.appendChild(itemLista);

    Campos.push(campoPersonalizado);
}

function getCampos(){
  return Campos;
}

exports.getCampos = getCampos;