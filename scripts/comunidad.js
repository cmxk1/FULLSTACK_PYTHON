const entrenadoresContainer = document.getElementById("entrenadores");
const nutricionistasContainer = document.getElementById("nutricionistas");

const API_URL = "https://randomuser.me/api/?results=6";

async function fetchUserData() {
  try {
    const responseEntrenadores = await fetch(API_URL);
    const dataEntrenadores = await responseEntrenadores.json();

    const entrenadoresData = dataEntrenadores.results.slice(0, 6);


    const responseNutricionistas = await fetch(API_URL);
    const dataNutricionistas = await responseNutricionistas.json();

    const nutricionistasData = dataNutricionistas.results.slice(0, 6);

    displayCards(entrenadoresData, entrenadoresContainer);
    displayCards(nutricionistasData, nutricionistasContainer);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

function displayCards(data, container) {
  data.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const name = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const picture = user.picture.medium;

    card.innerHTML = `
      <img src="${picture}" alt="${name}">
      <h3>${name}</h3>
      <p>Email: ${email}</p>
    `;

    container.appendChild(card);
  });
}

fetchUserData();
