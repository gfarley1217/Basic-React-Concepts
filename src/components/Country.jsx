import { useState } from "react";

function Country() {
    const [name, setName] = useState("United States");
    const [gold, setGold] = useState(0);
    function handleClick() {
        setGold(gold + 1);
    }
    return (
        <div>
            <h2>{name}</h2>
            <p>{gold}</p>
            <button class="gold-button" onClick={handleClick}>Add Gold!</button>
        </div>
    )
}

export default Country;