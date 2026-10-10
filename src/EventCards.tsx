import IconButton from "./components/IconButton.tsx";
import Overlay from "./components/Overlay.tsx";
import CardScrollContainer from "./components/CardScrollContainer.tsx";
import { type MouseEventHandler, useEffect, useRef, useState } from "react";
import { type EventCard, loadEventCards } from "./data/eventCards.ts";
import { compareCards } from "./data/card.ts";

type Props = {
    expanded: boolean;
    onClick: MouseEventHandler;
}

function EventCards(props: Props) {
    const [cards, setCards] = useState<EventCard[]>([]);
    const scrollContainer = useRef<HTMLDivElement>(null);

    useEffect(() => { loadEventCards().then(c => setCards(c.sort(compareCards))); }, []);
    useEffect(() => { scrollContainer.current!.scrollTop = 0 }, [props.expanded]);

    return (
        <>
            <IconButton label="Events" iconSrc="/icons/troublemaker.svg" onClick={props.onClick} />
            <Overlay visible={props.expanded ?? false} title="Events" onClose={props.onClick}>
                <CardScrollContainer ref={scrollContainer} cards={cards} />
            </Overlay>
        </>);
}

export default EventCards;
