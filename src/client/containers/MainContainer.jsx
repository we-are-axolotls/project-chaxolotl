/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders ChatBoxContainer
 *
 * ************************************
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import ConvoContainer from './ConvoContainer';
import RecContainer from './RecContainer';
import ChatBoxContainer from './ChatBoxContainer';


const mapStateToProps = (store) => ({	
});

const mapDispatchToProps = dispatch => ({
});


class MainContainer extends Component {
	constructor(props) {
		super(props);
	}

	// this is where we connect that backend and frontend
	componentDidMount() {
		// fetch from db, and populate store with data from db

		// Wait for backend connection to test this
		//this.props.dispatch(fetchUserData(this.props.currentUser.id));
	}

	render() {
		return (
      <div className="main-container">
        <ConvoContainer />
        <RecContainer />
        <ChatBoxContainer />                            
      </div>
    )
  };
};

// connects state and dispatch from store to MainContainer's props
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);