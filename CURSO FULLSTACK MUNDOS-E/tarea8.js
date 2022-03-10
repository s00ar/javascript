let residents = [];
const getCharacter = function(id) {
    fetch(`https://swapi.dev/api/people/${id}`)
        .then(function(response) {
            return response.json();
        }).then(function(character) {
            console.log(`El nombre del personaje es ${character.name}`);
            return character;
        }).then(function(character) {
            return fetch(character.homeworld);
        }).then(function(planet) {
            return planet.json();
        }).then(function(planet) {
            console.log(`El personaje vive en ${planet.name}`);
            return Promise.all([
                fetch(`https://swapi.dev/api/people/?search=${planet.residents}`)
                .then(function(response) {
                    residents = response.json();
                    //}).then(function(planet) {
                    /*THIS DID NOT WORK
                        }).then(function(planet) {
                                planet.residents.all(function(residents) {
                                    Promise.all(residents).then((values) => {
                                        console.log(values);
                                    });
                                }) */
                }).catch(function(error) {
                    console.log(error);
                })
            ]);
        })
}



/* }).catch(function(character) {
    return fetch(character.species); //esto no funciona
}).then(function(species) {
    return species.json();
}).then(function(species) {
    console.log(`La especie del personaje es ${species.name}`); */



const getCharacterAsync = async function(id) {
    try {
        const characterResponse = await fetch(`https://swapi.dev/api/people/${id}`);
        const character = await characterResponse.json();
        console.log(`El nombre del personaje es ${character.name}`);
        const planetResponse = await fetch(character.homeworld);
        const planet = await planetResponse.json();
        console.log(`El personaje vive en ${planet.name}`);
        Promise.all([
            fetch(character.species),
            fetch(character.homeworld)
        ])
    } catch (error) {
        console.log(error);
    }
}