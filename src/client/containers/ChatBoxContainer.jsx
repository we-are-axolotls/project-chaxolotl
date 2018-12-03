/**
 * ************************************
 *
 * @module  ChatBoxContainer
 * @author
 * @date
 * @description stateful component that renders MessageDisplay and MessageCreator
 *
 * ************************************
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import MessageDisplay from '../components/MessageDisplay';
import MessageCreator from '../components/MessageCreator';


const mapStateToProps = (store) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

class ChatBoxContainer extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		return(
      <div className="chat-box-container">
        <MessageDisplay />
        <MessageCreator />
      </div>
    );
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatBoxContainer);

