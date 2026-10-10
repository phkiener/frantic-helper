import Scoreboard from "./Scoreboard.tsx";
import SpecialCards from "./SpecialCards.tsx";
import EventCards from "./EventCards.tsx";
import "./App.css";
import {useState} from "react";

type ExpandedCard = "Events" | "SpecialCards" | undefined;

function App() {
    const [expandedCard, setExpandedCard] = useState<ExpandedCard>(undefined);

    return (
        <>
            <header>
                <h1>frantic-helper</h1>
            </header>
            <main>
                <Scoreboard />
            </main>
            <footer>
                <SpecialCards expanded={expandedCard === "SpecialCards"} onClick={() => toggleCard("SpecialCards")} />
                <EventCards expanded={expandedCard === "Events"} onClick={() => toggleCard("Events")} />
            </footer>
        </>);

    function toggleCard(card: ExpandedCard) {
        if (expandedCard === card || card === undefined) {
            setExpandedCard(undefined);
        } else {
            setExpandedCard(card);
        }
    }
}

export default App;
