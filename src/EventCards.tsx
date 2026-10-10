import IconButton from "./components/IconButton.tsx";
import Overlay from "./components/Overlay.tsx";
import CardDetails from "./components/CardDetails.tsx";
import { type MouseEventHandler, useEffect, useRef, useState } from "react";
import { type EventCard, loadEventCards } from "./data/eventCards.ts";
import "./EventCards.css";

type Props = {
    expanded: boolean;
    onClick: MouseEventHandler;
}

function EventCards(props: Props) {
    const [cards, setCards] = useState<EventCard[]>([]);
    const scrollContainer = useRef<HTMLDivElement>(null);

    useEffect(() => { loadEventCards().then(c => setCards(c)); }, []);
    useEffect(() => { scrollContainer.current!.scrollTop = 0 }, [props.expanded]);

    return (
        <>
            <IconButton label="Events" onClick={props.onClick} />
            <Overlay visible={props.expanded ?? false} title="Events" onClose={props.onClick}>
                <div className="event-card-list" ref={scrollContainer}>
                    {cards.map(c => <CardDetails card={c} />)}
                </div>
            </Overlay>
        </>);
}

export default EventCards;
