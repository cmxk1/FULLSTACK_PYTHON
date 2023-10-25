function calculateCalories() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var activity = document.getElementById('activity').value;

    // Fórmula de Harris-Benedict
    var basalMetabolicRate = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    var totalCalories = basalMetabolicRate * activity;

    document.getElementById('result').innerHTML = "Calorías aproximadas a consumir: " + totalCalories.toFixed(2);
}



