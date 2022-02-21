const getCharacter = function(id) {
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(character) {
            console.log(`El nombre del personaje seleccionado es ${character.name}`)
        })
        .catch(function(error) {
            console.log(error)
        });
}

const getCharacterAsync = async function(id) {
    try {
        const fetchCharacterResponse = await fetch(`
                    https: //swapi.dev/api/people/${id}`);
        const characterJson = await fetchCharacterResponse.json();
        console.log(`El nombre del personaje seleccionado es ${characterJson.name}`)
        const planetResponse = await fetch(character.homeworld);
        const planet = await planetResponse.json();
        console.log(`El personaje nació en el planeta ${planet.name}`);
    } catch (error) {
        console.log(error)
    }
}
const listElements = document.getElementById('list');
const button = document.getElementById('button');
button.addEventListener('click', function(event) {
    console.log(event)
})

const input = document.getElementById('main-input');
input.addEventListener('change', function(event) {
    console.log(event.target.value)
})