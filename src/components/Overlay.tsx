import type { MouseEventHandler, ReactNode } from "react";
import "./Overlay.css";

type Props = {
    visible: boolean;
    title: string;
    onClose: MouseEventHandler;
    children: ReactNode;
};

function Overlay(props: Props) {
    return (
        <section className={props.visible ? "overlay epand" : "overlay collapse"}>
            <header>
                <h2>{props.title}</h2>
                <button type="button" onClick={props.onClose}>Close</button>
            </header>
            {props.children}
        </section>
    );
}

export default Overlay;
