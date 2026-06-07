import React, { use, useActionState, useState } from "react";
import './Guess.css'

function GuessTheNumber() {

    // Function to handle guess checking
    const computerGuess = () => Math.floor(Math.random() * 100) + 1;
    const [numberToGuess, setNumberToGues] = useState(computerGuess);
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const [attempts, setAttempts] = useState(0);

    const handleGuess = () => {
        const num = parseInt(guess);
        if (isNaN(num) || num < 1 || num > 100) {
            setMessage("Please enter a number between 1 to 100")
            return;
        }
        setAttempts(attempts + 1);

        if (num === numberToGuess) {
            setMessage(`congrs!${attempts + 1}`)
        } else if (num < numberToGuess) {
            setMessage("Too low! try again")
        } else {
            setMessage("Too high! try again")
        }
    };



    // Function to reset the game
    const resetGame = () => {
        setNumberToGues(computerGuess());
        setGuess("");
        setMessage('');
        setAttempts(0);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px 0" }}>
            <h2>Guess the Number</h2>
            <input
                placeholder="Enter a number between 1 and 100"
                style={{ width: "300px", padding: "5px" }}
                id="guess-input"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
            />
            <div style={{ display: "flex", margin: "20px 0", alignItems: "center", justifyContent: "space-around", width: "300px" }}>
                <button onClick={handleGuess}>Check </button>
                <button onClick={resetGame}> reset</button>
            </div>
            <p>{message}</p>
        </div>
    );
}

export default GuessTheNumber;
