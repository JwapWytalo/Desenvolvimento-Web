var zoo = [
{
    animal: "CAT",
    name: "Tom"
},
{
    animal: "CAT",
    name: "Hercules"
},
{
    animal: "DOG",
    name: "Spiff"
},
{
    animal: "DOG",
    name: "Pluto"
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