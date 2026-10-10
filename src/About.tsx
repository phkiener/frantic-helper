import type { MouseEventHandler } from "react";
import IconButton from "./components/IconButton.tsx";
import Overlay from "./components/Overlay.tsx";

type Props = {
    expanded: boolean;
    onClick: MouseEventHandler;
}

function About(props: Props) {
    return (
        <>
            <IconButton label="About" onClick={props.onClick} />
            <Overlay visible={props.expanded ?? false} title="About" onClose={props.onClick}>
                <p>
                    Frantic and related content (card titles, descriptions, images) are owned and
                    copyrighted by Rulefactory. <a href="https://rulefactory.ch">https://rulefactory.ch</a>
                </p>

                <p>
                    Content taken from <a href="https://rulefactory.ch/rulebook/frantic-original/">https://rulefactory.ch/rulebook/frantic-original/</a>.
                </p>
            </Overlay>
        </>
    );
}

export default About;
