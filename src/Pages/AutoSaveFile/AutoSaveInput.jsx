import { useEffect, useState } from "react";
function AutoSaveInput() {
    const [text, setText] = useState("");


    useEffect(() => {
        const save = localStorage.getItem("autosave-text",);
        if (save) {
            setText(save)
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("autosave-text", text)
    }, [text]);

    function Clear() {
        setText("")
        localStorage.removeItem("autosave-text")
    }
    return (
        <div>
            <h1>Auto Save Input</h1>
            {/* your code here  */}
            <form>
                <label htmlFor="Name"> Name: </label>
                <input type="text" value={text} name="name" onChange={(e) => { setText(e.target.value) }} data-testid="input-field" />
                <button onClick={Clear} data-testid="clear-btn">Clear</button>
            </form>

        </div>
    );
}

export default AutoSaveInput;
