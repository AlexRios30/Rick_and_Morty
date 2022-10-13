const URL = "https://rickandmortyapi.com/api";
const characters = "https://rickandmortyapi.com/api/character";
const container = document.getElementById("container");
const input = document.getElementById("input");

window.addEventListener("DOMContentLoaded", apiFunction);
input.addEventListener("keyup", search);

function createCard(data) {
    data["results"].map(results => {

        const div = document.createElement("div");
        div.classList.add("card");

        const img = document.createElement("img");
        img.src = results["image"];
        img.classList.add("img");

        const name = document.createElement("h1");
        name.textContent = results["name"];
        name.classList.add("name");

        const status = document.createElement("p");
        status.textContent = results["status"];
        status.classList.add("status");

        const species = document.createElement("p");
        species.textContent = results["species"];
        species.classList.add("species");

        const type = document.createElement("p");
        type.textContent = results["type"];
        type.classList.add("type");

        const gender = document.createElement("p");
        gender.textContent = results["gender"];
        gender.classList.add("gender");

        div.appendChild(name);
        div.appendChild(img);
        div.appendChild(species);
        div.appendChild(status);
        div.appendChild(type);
        div.appendChild(gender);
        container.appendChild(div);
    })
}

function apiFunction() {
    fetch(characters)
    .then(response => response.json())
    .then(data => createCard(data))
}

function search(event) {
    
    container.innerHTML="";

    let newApi = characters + `?name=${event.target.value}`;

    fetch(newApi)
    .then(response => response.json())
    .then(data => createCard(data))
}



// .then(data => (img.src = data.results[0].image,
//     nameCharacter.textContent = data.results[0].name,
//     statusCharacter.textContent = data.results[0].status,
//     speciesCharacter.textContent = data.results[0].species,
//     typeCharacter.textContent = data.results[0].type,
//     genderCharacter.textContent = data.results[0].gender))