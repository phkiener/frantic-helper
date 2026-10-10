import type { Card } from "../data/card.ts";
import { forwardRef } from "react";
import CardDetails from "./CardDetails.tsx";
import "./CardScrollContainer.css";

type Props = {
    cards: Card[];
}

const CardScrollContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <div className="card-list" ref={ref}>
            {props.cards.map(c => <CardDetails key={c.id} card={c} />)}
        </div>
    );
});

export default CardScrollContainer;
