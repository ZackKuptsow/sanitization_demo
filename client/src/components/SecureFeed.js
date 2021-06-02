import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
	Container,
	Row,
	Col,
	Navbar,
	Nav,
	NavDropdown,
	Card,
	Form,
	Button,
} from 'react-bootstrap';
import InnerHTML from 'dangerously-set-html-content';

export default class SecureFeed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			tweets: [],
		};
		this.tweetRef = React.createRef();
		this.addTweet = this.addTweet.bind(this);
		this.renderTweet = this.renderTweet.bind(this);
	}

	addTweet(e) {
		e.preventDefault();
		this.setState({
			tweets: [...this.state.tweets, this.tweetText.value],
		});
		document.getElementById('tweetInput').value = '';
	}

	renderTweet() {
		const tweets = this.state.tweets;
		let tweetOutput = [];
		for (let i = 0; i < tweets.length; i++) {
			if (i === tweets.length - 1) {
				console.log('Before sanitization:');
				console.log(tweets[i]);
				let tweet = tweets[i]
					.replace(/&/gi, '&amp;')
					.replace(/</gi, '&lt;')
					.replace(/>/gi, '&gt;');
				console.log('After sanitization:');
				console.log(tweet);
				tweetOutput.push(
					<InnerHTML
						html={`
					<li>${tweet}</li>
				`}
					/>
				);
			} else {
				tweetOutput.push(<li>{tweets[i]}</li>);
			}
		}
		return tweetOutput;
	}

	render() {
		return (
			<Container className="vh-100 vw-100">
				<Navbar id="nav" expand="lg">
					<Container className="mx-1 text-white">
						<Navbar.Brand>Sanitization Demo</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="/demo/insecure">
									Insecure
								</Nav.Link>
								<Nav.Link href="/demo/secure">Secure</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Container id="container" className="p-3">
					<Row>
						<Col>
							<Form onSubmit={this.addTweet}>
								<Form.Control
									id="tweetInput"
									as="textarea"
									placeholder="Send a tweet..."
									rows={10}
									ref={(input) => {
										this.tweetText = input;
									}}
								/>
								<Button type="submit" className="mt-3">
									Tweet
								</Button>
							</Form>
						</Col>
						<Col id="tweetBox">
							<div
								id="tweets"
								className="px-5"
								ref={this.tweetRef}
							>
								<h1 style={{ color: '#00aced' }}>Feed</h1>
								<hr />
								{this.renderTweet()}
							</div>
						</Col>
					</Row>
				</Container>
			</Container>
		);
	}
}
