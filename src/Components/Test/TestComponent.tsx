import * as React from "react";
import * as css from "./styles.css"

export interface ComponentProps { }

export interface ComponentState { }

export default class Component extends React.Component<ComponentProps, ComponentState> {

    styles: { [selector: string]: React.CSSProperties } = {
        component: { }
    }

    constructor(props: ComponentProps) {
        super(props);
        console.log(css)
    }

    render() {

        return <div className={css.test}>
            hello worldddddsdf
        </div>;
    }

}
