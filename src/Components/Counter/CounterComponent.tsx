import * as React from "react";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as classNames from "classnames";

import * as styles from "./styles.css"

import { RootState } from "../../Reducers"

import { triggerIncrementAsync, decrement } from "../../Reducers/Counter/Actions"

interface CounterComponentProps {
   counter: number;
   triggerIncrementAsync: typeof triggerIncrementAsync;
   decrement: typeof decrement;
   isCounting: boolean;
}

class CounterComponent extends React.Component<CounterComponentProps, any> {

   constructor(props: CounterComponentProps) {
      super(props);
   }

   render() {
      const classNames = this.props.isCounting ? styles.disabled : styles.button;
      return <div>
         <h2>Counter: {this.props.counter}</h2>
         <div>
            <button
               className={classNames}
               onClick={() => this.props.triggerIncrementAsync({ n: 2 })}
               disabled={false}>Increment</button>
            <button
               onClick={() => this.props.decrement()}>Decrement</button>
         </div>
      </div>
         ;
   }

}

const mapStateToProps = (state: RootState): Partial<CounterComponentProps> => ({
   counter: state.counter.counter,
   isCounting: state.counter.isCounting
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
   triggerIncrementAsync,
   decrement
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);