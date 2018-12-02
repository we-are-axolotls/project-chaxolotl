/**
 * ************************************
 *
 * @module  RecContainer
 * @author
 * @date
 * @description stateful component that renders...
 * 
 * ************************************
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';




const mapStateToProps = (store) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

class RecContainer extends Component {
  constructor(props) {
    super(props);
  }

	render() {
		return(
      <div className="rec-container">

      </div>
    );
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecContainer);