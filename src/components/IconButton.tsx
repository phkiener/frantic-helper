import type { MouseEventHandler } from "react";
import "./IconButton.css";

type Props = {
    label: string;
    iconSrc?: string;
    onClick?: MouseEventHandler
};

function IconButton(props: Props) {
    return (
        <figure onClick={props.onClick} className="icon-button">
            <img src={props.iconSrc} alt={props.label} />
            <figcaption>{props.label}</figcaption>
        </figure>
    );
}

export default IconButton;
