"use strict";

// Funktion til at rulle en terning
function rollDice() {
    const diceSides = 6; // Antal sider på terningen
    const diceRoll = Math.floor(Math.random() * diceSides) + 1; // Genererer et tilfældigt tal mellem 1 og 6
    
    const resultParagraph = document.getElementById("result"); // Hent resultat-elementet
    resultParagraph.textContent = `Du slog en ${diceRoll} 🎲`; // Opdater teksten med resultatet
}

// Tilføj event listener til knappen
document.getElementById("rollButton").addEventListener("click", rollDice);
