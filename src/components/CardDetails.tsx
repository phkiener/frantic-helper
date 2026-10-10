import "./CardDetails.css";

type Props = {
    title: string;
    description: string;
}

function CardDetails(props: Props) {
    return (
        <article className="card-details">
            <aside>Image...</aside>

            <header>{props.title}</header>
            <p>{props.description}</p>
        </article>
    );
}

export default CardDetails;
