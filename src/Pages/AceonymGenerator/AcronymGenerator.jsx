import { useState } from "react";

function AcronymGenerator() {

    const [input, setInput] = useState();
    const [acronym, setAcronym] = useState();

    function toAcronym(text) {
        const Results = text
            .split(" ")
            .filter((word) => word.length > 0)
            .map((word) => word[0].toUpperCase())
            .join("")
        return Results;
    }

    function handleClick() {
        setAcronym(toAcronym(input));
    }

    return (
        <div>
            <h1>Acronym Generator</h1>
            <p>
                An acronym is formed by taking the first letter of each word in a phrase
                and converting them to uppercase.
            </p>

            <div>
                <input type="text" placeholder="Enter a phrase..." value={input} onChange={(e) => setInput(e.target.value)} data-testid="input" />
                <button onClick={handleClick}>Generate</button>
                <p data-testid="Result">Result : {acronym} </p>
            </div>
        </div>
    );
}

export default AcronymGenerator;

