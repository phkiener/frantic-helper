import {type ChangeEvent, useState} from "react";
import "./Scoreboard.css";

function Scoreboard() {
    const [score, setScore] = useState(0);
    const [isWriting, setIsWriting] = useState(false);

    return (
        <>
            <article className="scoreboard">
                <header>Your score:</header>
                <p>
                    {isWriting
                        ? <input type="text" inputMode="numeric" name="score" value={score} onChange={applyScore} />
                        : <>{score}</>}
                </p>
                <footer>
                    {isWriting
                        ? <>
                            <button type="button" onClick={() => setIsWriting(false)}>Done</button>
                        </>
                        : <>
                            <button type="button" onClick={() => modifyScore(s => s + 1)}>+1</button>
                            <button type="button" onClick={() => modifyScore(s => s + 2)}>+2</button>
                            <button type="button" onClick={() => modifyScore(s => s + 3)}>+3</button>
                            <button type="button" onClick={() => modifyScore(s => s + 4)}>+4</button>
                            <button type="button" onClick={() => modifyScore(s => s + 5)}>+5</button>
                            <button type="button" onClick={() => modifyScore(s => s + 6)}>+6</button>
                            <button type="button" onClick={() => modifyScore(s => s + 7)}>+7</button>
                            <button type="button" onClick={() => modifyScore(s => s + 8)}>+8</button>
                            <button type="button" onClick={() => modifyScore(s => s + 9)}>+9</button>
                            <button type="button" onClick={() => modifyScore(s => s + 10)}>+10</button>
                            <br/>
                            <button type="button" onClick={() => modifyScore(s => s + 7)}>Special Card</button>
                            <button type="button" onClick={() => modifyScore(s => s + 13)}>Curse</button>
                            <button type="button" onClick={() => modifyScore(s => s + 42)}>Fuck You</button>
                            <br/>
                            <button type="button" onClick={() => modifyScore(s => s - 21)}>Seppuku (Success)</button>
                            <button type="button" onClick={() => modifyScore(s => s + 42)}>Seppuku (Fail)</button>
                            <button type="button" onClick={() => modifyScore(s => s + 21)}>Seppuku (Skip)</button>
                            <br/>
                            <button type="button" onClick={() => modifyScore(s => s + 50)}>Doomsday</button>
                            <br/>
                            <button type="button" onClick={() => modifyScore(s => s - 10)}>Timebomb (Success)</button>
                            <button type="button" onClick={() => modifyScore(s => s + 10)}>Timebomb (Fail)</button>
                            <br/>
                            <button type="button" onClick={() => setIsWriting(true)}>Change</button>
                            <button type="button" onClick={() => setScore(0)}>Clear</button>
                        </>
                    }
                </footer>
            </article>
        </>
    );

    function applyScore(evt: ChangeEvent<HTMLInputElement>) {
        const score = Number.parseInt(evt.target.value);
        if (Number.isNaN(score)) {
            return;
        }

        setScore(score);
    }

    function modifyScore(change: (current: number) => number) {
        setScore(current => {
           const updated = change(current);

           return Math.max(0, updated);
        });
    }
}

export default Scoreboard;
