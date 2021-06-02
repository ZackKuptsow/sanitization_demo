import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isRegistered: false,
		};
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Card>
							<Card.Header>
								{this.state.isRegistered ? 'Login' : 'Register'}
							</Card.Header>
							<Card.Body className="p-3">
								<Form>
									<Form.Group
										className="mb-3"
										controlId="loginUsername"
									>
										<Form.Label>Username</Form.Label>
										<Form.Control
											type="text"
											placeholder="Username"
										/>
									</Form.Group>
									<Form.Group
										className="mb-3"
										controlId="loginPassword"
									>
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
										/>
									</Form.Group>
								</Form>
								<Card.Link
									onClick={() => {
										this.setState({
											isRegistered:
												!this.state.isRegistered,
										});
									}}
								>
									{this.state.isRegistered
										? 'Not registered yet?'
										: 'Are you registered already?'}
								</Card.Link>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}
