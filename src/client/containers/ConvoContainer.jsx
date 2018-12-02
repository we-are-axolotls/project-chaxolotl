/**
 * ************************************
 *
 * @module  ConvoContainer
 * @author
 * @date
 * @description stateful component that renders MessageDisplay and MessageCreator
 *
 * ************************************
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Convo from '../components/Convo';


const mapStateToProps = (store) => ({
  userBase: store.chatbox.userBase
});

const mapDispatchToProps = (dispatch) => ({
  selectConvo: (event) => {dispatch(actions.selectConvo(event))}
});

class ConvoContainer extends Component {
  constructor(props) {
    super(props);
  }

	render() {


    const convos = Object.entries(this.props.userBase).map((user) => {
      return (
        <Convo id={user[0]} name={user[1]} selectConvo={this.props.selectConvo} />
      );
    });

		return(
      <div className="convo-container">
        {convos}
      </div>
    );
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ConvoContainer);