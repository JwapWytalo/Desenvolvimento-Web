var zoo = [{
    animal: "DOG",
    nome: "lucy"
},
{
    animal: "CAT",
    name: "Hercules"
}
]

function addAnimal(animal){
    zoo.push(animal);
}

function getAnimal(animal){
    return zoo;
}

exports.addAnimal = addAnimal;
exports.getAnimal = getAnimal;