

function loadData() {
    //Traer el nombre del pokémon a buscar
    const encontrarPokemon = document.getElementById('encontrar-pokemon').value.toLowerCase();
    //fetch para ingresar a la API local
    fetch('pokemon.json')
        //then de respuesta si no se encuntran registros
        .then(response => {

            if (!response.ok) {
                throw new Error("No se puede obtener la información. Codigo de estado: " + response.status);
            }
            return response.json();
        })
        //then de ingreso a la base da datos
        .then(filterName => {
            //id pokemonList div de tarjeta de frente
            const pokemonList = document.getElementById('pokemonList');
            //limpiar el div
            pokemonList.innerHTML = '';
            //objeto par guardar cada uno de los pokemon
            const agregarPokemon = {};
            //Constante que muestra el numero limitado de pokemon
            const limitePokemon = 15;
            //for que recorre la data de los pokemon
            for (let i = 0; i < filterName.length; i++) {
                const namePokemon = filterName[i];
                //console.log(namePokemon.type[0]);
                //Verificar si el nombre delpokémon coincide con la búsqueda del usuario
                if (namePokemon.name.toLowerCase().includes(encontrarPokemon)) {
                    //Verificar si el pokémon ya ha sido agregado
                    if (!agregarPokemon[namePokemon.name]) {
                        //Marcar el pokémon como agregado
                        agregarPokemon[namePokemon.name] = true;
                        //console.log(agregarPokemon)

                        //Crear el div para cada pokémon
                        const pokemonDiv = document.createElement('div');
                        //Clase para estilos en CSS
                        pokemonDiv.className = 'div-pokemon';
                        
                        pokemonDiv.innerHTML = `
                                                
                        <!-- Tarjeta de habilidades con efecto de volteo -->
                        <div class="habilidades-tarjeta">
                            <div class="habilidades-tarjeta-front">
                                <h3>Nombre: ${namePokemon.name}</h3>
                                <img src="${namePokemon.ThumbnailImage}" alt="${namePokemon.name}" />
                            </div>
                            <div class="habilidades-tarjeta-back">
                                <h3>Peso: ${namePokemon.weight}</h3>
                                <h3>Altura: ${namePokemon.height}</h3>
                                <h3>Habilidad: ${namePokemon.abilities}</h3>
                                <h3>Debilidad: ${namePokemon.weakness}</h3>
                                <h3><b >Tipo:</b> ${namePokemon.type}</h3>
                            </div>
                        </div>`

                        // Agregar el div al contenedor
                        pokemonList.appendChild(pokemonDiv);
                        
                    }
                }
                if(Object.keys(agregarPokemon).length >= limitePokemon) {
                    break
                }
            }

        });

    // Agrega aquí el código para el efecto de volteo de la tarjeta
    const habilidadesTarjetas = document.querySelectorAll('.habilidades-tarjeta');
    
    habilidadesTarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('mouseover', () => {
            tarjeta.classList.add('hovered');
        });
        
        tarjeta.addEventListener('mouseout', () => {
            tarjeta.classList.remove('hovered');
        });
    });
}
        /* .then(data => {
            //div donde se muestran los pokémon
            const pokemonList = document.getElementById('pokemonList');
            // objeto para rastrear los pokemon agregados
            const pokemonTracker = {};

            //Array para almacenar los pokemon unicos
            const pokemonUnique = [];

            //Constante que muestra el numero limitado de pokemon
            const limitePokemon = 15;

            for (let i = 0; i < data.length; i++) {
                const pokemon = data[i];

                //verificar si el pokemon ya ha sido agregado
                if (!pokemonTracker[pokemon.ThumbnailAltText]) {

                    //marcar el pokemon como agregado
                    pokemonTracker[pokemon.ThumbnailAltText] = true;

                    //Agregar pokemon unico al arreglo
                    pokemonUnique.push(pokemon);
                }

                //Salir del bucle si ya tenemos sufiecientes pokemon únicos
                if (pokemonUnique.length >= limitePokemon) {
                    break
                }

            }

            //Iterar sobre la lista de pokémon unicos y mostrarla
            pokemonUnique.forEach(pokemon => {

                // Crear un div para cada Pokémon
                const pokemonDiv = document.createElement('div');

                //Clase para estilos en CSS
                pokemonDiv.className = 'div-pokemon';

                // Agregar nombre y tipo
                pokemonDiv.innerHTML = `
                        <h3>No.: ${pokemon.number} </h3>
                        <h3>Nombre del Pokémon: ${pokemon.ThumbnailAltText}</h3>
                        <img src="${pokemon.ThumbnailImage}" alt="${pokemon.name}" />
                        <h3>Habilidades: ${pokemon.abilities}</h3>
                        <h5>Tipo: ${pokemon.type}</h5>`

                // Agregar el div al contenedor
                pokemonList.appendChild(pokemonDiv);

            });
        }) */
      /*   .catch(error => {
            console.log(error);
        })
} */
