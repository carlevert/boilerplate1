import * as React from "react";
import { bindActionCreators, Dispatch } from "redux"
import { connect } from "react-redux"
import ui from "redux-ui";
import * as ReduxUI from "redux-ui";

import { RootState } from "../../Reducers"

import { signIn, signOut, ValidateLoginParams } from "../../Reducers/Login/Actions"

import * as styles from "./styles.css"


interface UIStateShape {
	username: string;
	password: string;
}

interface LoginComponentProps extends ReduxUI.ReduxUIProps<UIStateShape> {
	signIn: typeof signIn;
	signOut: typeof signOut;
	validating: boolean;
	loggedIn: boolean;
}

const mapStateToProps = (state: RootState) => ({
	validating: state.login.validating,
	loggedIn: state.login.loggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch<RootState>) => bindActionCreators({
	signIn,
	signOut
}, dispatch);

@ui<UIStateShape>({
	state: {
		username: "",
		password: ""
	}
})
class LoginComponent extends React.Component<LoginComponentProps, any> {
	render() {
		return <div className={styles.component}>
			<input
				value={this.props.ui.username}
				onChange={e => this.props.updateUI("username", e.currentTarget.value)} />
			{this.props.loggedIn ? <LoggedIn signOut={this.props.signOut}/> : <NotLoggedIn signIn={this.props.signIn} />}
		</div>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

const Validating = (props: { validating: boolean }) => props.validating ? <div>Validating</div> : null;

@ui<UIStateShape>()
class LoggedIn extends React.Component<any, any> {
	render() {
		const { username } = this.props.ui;
		console.log(this.props)
		return <div>
			<div>Logged in as {username}</div>
			<button onClick={() => this.props.signOut()}>Sign out</button>
		</div>
	}
}

@ui()
class NotLoggedIn extends React.Component<any, any> {
	render() {
		const { username, password } = this.props.ui;
		return <div>
			<input type="text" onChange={e => this.props.updateUI("username", e.currentTarget.value)} value={username} />
			<input type="password" onChange={e => this.props.updateUI("password", e.currentTarget.value)} value={password} />
			<button onClick={() => this.props.signIn({ username, password })}>Sign in</button>
			<Validating validating={this.props.validating} />
		</div>
	}
}
