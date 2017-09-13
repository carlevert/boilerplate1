import * as React from "react";
import { store } from "../../store";
import { Provider } from "react-redux";
import * as styles from "./styles.css"
import * as classNames from "classnames";

import Counter from "../Counter/CounterComponent"
import Login from "../Login/LoginComponent"

interface ComponentProps { }
interface ComponentState { }

export default class AppComponent extends React.Component<ComponentProps, ComponentState> {

    styles: { [key: string]: React.CSSProperties } = {
        component: {}
    }

    constructor(props: ComponentProps) {
        super(props);
    }

    render() {
        return <Provider store={store}>
            <div className={styles.app}>
                <Counter />
                <Login  />
            </div>
        </Provider>;
    }

}