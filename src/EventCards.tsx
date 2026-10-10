import IconButton from "./components/IconButton.tsx";
import Overlay from "./components/Overlay.tsx";
import CardDetails from "./components/CardDetails.tsx";
import { type MouseEventHandler, useEffect, useState } from "react";
import { type EventCard, loadEventCards } from "./data/eventCards.ts";

type Props = {
    expanded: boolean;
    onClick: MouseEventHandler;
}

function EventCards(props: Props) {
    const [cards, setCards] = useState<EventCard[]>([]);
    useEffect(() => { loadEventCards().then(c => setCards(c)); }, []);

    return (
        <>
            <IconButton label="Events" onClick={props.onClick} />
            <Overlay visible={props.expanded ?? false} title="Events" onClose={props.onClick}>
                {cards.map(c =>
                    <CardDetails title={c.title} description={c.description} />
                )}
            </Overlay>
        </>);
}

export default EventCards;
