const pokemon = Math.floor(Math.random() * (100 - 0)); 
const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;


fetch(URL)
    .then(response => {
        return response.json();
    })
    .then(data =>{
        console.log(data)
       showPokemon(data);
    })
    .catch(error =>{
        console.log("error:",error)
})

function showPokemon(data) {
    const cont = document.getElementById("container");
    let content = "";
    content = `
    
    <div class="carta">
        <div class="carta__img">
            <img src="${data.sprites.other.dream_world.front_default}" alt="imagen del pokemon">
        </div>
        <h4 class="carta__nombre">${data.name}</h4>
        <div class="carta__habilidades">
            <div>${data.stats[0].stat.name}</div>
            <div>${data.stats[1].stat.name}</div>
            <div>${data.stats[2].stat.name}</div>
            <div>${data.stats[3].stat.name}</div>
            <div>${data.stats[4].stat.name}</div>
            <div>${data.stats[5].stat.name}</div>
            <div>${data.stats[0].base_stat}</div>
            <div>${data.stats[1].base_stat}</div>
            <div>${data.stats[2].base_stat}</div>
            <div>${data.stats[3].base_stat}</div>
            <div>${data.stats[4].base_stat}</div>
            <div>${data.stats[5].base_stat}</div>
        </div>
    </div>
    
    `;    
    cont.innerHTML = content
}