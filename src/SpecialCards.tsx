import IconButton from "./components/IconButton.tsx";
import type { MouseEventHandler } from "react";
import Overlay from "./components/Overlay.tsx";

type Props = {
    expanded: boolean;
    onClick: MouseEventHandler;
}

function SpecialCards(props: Props) {
    return (
        <>
            <IconButton label="Special Cards" onClick={props.onClick} />
            <Overlay visible={props.expanded ?? false} title="Special Cards" onClose={props.onClick}>
                Special Cards here
            </Overlay>
        </>);
}

export default SpecialCards;
