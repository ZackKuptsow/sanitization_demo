import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Login from './Login';
import InsecureFeed from './InsecureFeed';
import SecureFeed from './SecureFeed';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/demo/insecure" component={InsecureFeed} />
					<Route path="/demo/secure" component={SecureFeed} />
					<Route exact path="/" component={Login} />
				</Switch>
			</Router>
		);
	}
}
