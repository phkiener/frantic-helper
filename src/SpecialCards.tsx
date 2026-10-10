import IconButton from "./components/IconButton.tsx";
import Overlay from "./components/Overlay.tsx";
import CardScrollContainer from "./components/CardScrollContainer.tsx";
import { type MouseEventHandler, useEffect, useRef, useState } from "react";
import { type SpecialCard, loadSpecialCards } from "./data/specialCards.ts";

type Props = {
    expanded: boolean;
    onClick: MouseEventHandler;
}

function SpecialCards(props: Props) {
    const [cards, setCards] = useState<SpecialCard[]>([]);
    const scrollContainer = useRef<HTMLDivElement>(null);

    useEffect(() => { loadSpecialCards().then(c => setCards(c)); }, []);
    useEffect(() => { scrollContainer.current!.scrollTop = 0 }, [props.expanded]);

    return (
        <>
            <IconButton label="Special Cards" iconSrc="/icons/fantastic.svg" onClick={props.onClick} />
            <Overlay visible={props.expanded ?? false} title="Special Cards" onClose={props.onClick}>
                <CardScrollContainer ref={scrollContainer} cards={cards} />
            </Overlay>
        </>);
}

export default SpecialCards;
