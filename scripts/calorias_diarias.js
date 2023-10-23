// Variables proporcionadas por el usuario
const pesoMeta = parseFloat(prompt("Ingresa tu peso meta:"));
const horasEntrenamiento = parseFloat(prompt("Ingresa las horas de entrenamiento por semana:"));

// Constantes
const constanteProteina = 2;
const constanteGrasa = 1;
const constanteCarbohidratos = 0.25;

// Cálculo del número de calorías diarias
const numeroCaloriasDiarias = pesoMeta * (horasEntrenamiento + 9.5) * 2;

// Cálculo de los gramos de proteína
const gramosProteina = constanteProteina * pesoMeta;

// Cálculo de los gramos de grasa
const gramosGrasa = pesoMeta;

// Cálculo de los gramos de carbohidratos
const gramosCarbohidratos = (numeroCaloriasDiarias - (gramosProteina * 4) - (gramosGrasa * 9)) * constanteCarbohidratos;

// Mostrar los resultados
console.log("Número de calorías diarias: " + numeroCaloriasDiarias);
console.log("Gramos de proteína: " + gramosProteina);
console.log("Gramos de grasa: " + gramosGrasa);
console.log("Gramos de carbohidratos: " + gramosCarbohidratos);
