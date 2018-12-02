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
	messageInput: store.chatbox.messageInput  
});

const mapDispatchToProps = (dispatch) => ({
	updateInput: (event) => {dispatch(actions.updateInput(event))},
	addMessage: () => {dispatch(actions.addMessage())}
});

class MessageCreator extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
      <div className="message-creator" style={style.messageCreator}>
				<input className="message-input" onKeyPress={(event) => (event.key === 'Enter' ? this.props.addMessage() : null)} value={this.props.messageInput} onChange={(event) => this.props.updateInput(event)}/>
				<button className="send-button" onClick={this.props.addMessage}>Send</button>
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