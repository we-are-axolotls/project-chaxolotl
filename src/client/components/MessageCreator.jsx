/**
 * ************************************
 *
 * @module  MessageCreator
 * @author
 * @date
 * @description presentation component that takes user input for new message creation
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = (store) => ({   
	messageInput: store.chatbox.messageInput,
	currentUser: store.chatbox.currentUser,
	conversationPartner: store.chatbox.conversationPartner
});

const mapDispatchToProps = (dispatch) => ({
	updateInput: (event) => {dispatch(actions.updateInput(event))},
	sendMessage: (currentUser, conversationPartner, messageInput) => {
		dispatch(actions.sendMessage(currentUser, conversationPartner, messageInput))
	}
});

class MessageCreator extends Component {
	constructor(props) {
		super(props);
		this.handleSend = this.handleSend.bind(this);
	}

	handleSend() {
		this.props.sendMessage(this.props.currentUser, this.props.conversationPartner, this.props.messageInput)
	}

	render() {
		return(
      <div className="message-creator" style={style.messageCreator}>
				<input className="message-input" onKeyPress={(event) => (event.key === 'Enter' ? this.handleSend : null)} value={this.props.messageInput} onChange={(event) => this.props.updateInput(event)}/>
				<button className="send-button" onClick={this.handleSend}>Send</button>
      </div>
    );
	};
};

const style = {
	
	messageCreator: {
		border: "0.2rem solid blue",
		padding: "0.8rem",
		margin: "0 auto",
		display: "flex",
		flexDirection : "row",
		justifyContent: "center",
		width: "90%"
	},

	input: {

	},
	
	button: {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageCreator);