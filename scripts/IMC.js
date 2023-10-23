// Variables proporcionadas por el usuario
const peso = parseFloat(prompt("Ingresa tu peso en kilogramos:"));
const estatura_cm = parseFloat(prompt("Ingresa tu estatura en centímetros:"));
const edad = parseFloat(prompt("Ingresa tu edad:"));

// Constantes
const constante1 = 66;
const constante2 = 13.7;
const constante3 = 5;
const constante4 = 6.8;

// Cálculo del Índice de Masa Corporal (IMC)
const IMC = constante1 + (peso * constante2) + (estatura_cm * constante3) - (edad * constante4);

// Mostrar el IMC
console.log("Tu Índice de Masa Corporal (IMC) es: " + IMC);

// Nivel de actividad del usuario (opciones del 1 al 5)
const nivelActividad = parseInt(prompt("Selecciona tu nivel de actividad (1-5):\n1. Sedentario\n2. Poco Activo\n3. Actividad Moderada\n4. Muy Activo\n5. Excesivamente Activo"));

// Ajuste del IMC según el nivel de actividad
let IMCajustado;

switch (nivelActividad) {
  case 1:
    IMCajustado = IMC * 1.2;
    console.log("Tu IMC ajustado para un nivel sedentario es: " + IMCajustado);
    break;
  case 2:
    IMCajustado = IMC * 1.375;
    console.log("Tu IMC ajustado para un nivel poco activo es: " + IMCajustado);
    break;
  case 3:
    IMCajustado = IMC * 1.55;
    console.log("Tu IMC ajustado para un nivel de actividad moderada es: " + IMCajustado);
    break;
  case 4:
    IMCajustado = IMC * 1.725;
    console.log("Tu IMC ajustado para un nivel muy activo es: " + IMCajustado);
    break;
  case 5:
    IMCajustado = IMC * 1.9;
    console.log("Tu IMC ajustado para un nivel excesivamente activo es: " + IMCajustado);
    break;
  default:
    console.log("Nivel de actividad no válido.")
}