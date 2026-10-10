import "./CardDetails.css";
import type { Card } from "../data/card.ts";

type Props = {
    card: Card;
}

function CardDetails(props: Props) {
    return (
        <article className="card-details">
            <aside>
                <img src={`/icons/${props.card.id}.svg`} alt="Icon" />
            </aside>

            <header>{props.card.title}</header>
            <p>{props.card.description}</p>
        </article>
    );
}

export default CardDetails;
