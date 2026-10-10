import IconButton from "./components/IconButton.tsx";
import Overlay from "./components/Overlay.tsx";
import type { MouseEventHandler } from "react";

type Props = {
    expanded: boolean;
    onClick: MouseEventHandler;
}

function EventCards(props: Props) {
    return (
        <>
            <IconButton label="Events" onClick={props.onClick} />
            <Overlay visible={props.expanded ?? false} title="Events" onClose={props.onClick}>
                Event Cards here
            </Overlay>
        </>);
}

export default EventCards;
