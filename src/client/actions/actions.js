/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

//*********************************** CONVO ACTIONS ***********************************

export const selectConvo = (id) => ({
  type: types.SELECT_CONVO,
  payload: id
});



//*********************************** CHATBOX ACTIONS ***********************************

// updates message eator text input field
export const updateInput = (event) => ({
	type: types.UPDATE_INPUT,
	payload: event.target.value
});

// adds a new message to current chat conversation
export const addMessage = () => ({
	type: types.ADD_MESSAGE
});

// fetches user data from database
export const fetchUserDataBegin = () => ({
	type: types.FETCH_USER_DATA_BEGIN
});

// returns success message for data fetch
export const fetchUserDataSuccess = (messages) => ({
	type: types.FETCH_USER_DATA_SUCCESS,
	payload: { messages }
});

// returns failure message for data fetch
export const fetchUserDataFailure = (error) => ({
	type: types.FETCH_USER_DATA_FAILURE,
	payload: { error }
});

export function fetchUserData(currentUser) {
  return dispatch => {
    dispatch(fetchUserDataBegin());
    return fetch("/" + currentUser)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchUserDataSuccess(json.userData));
        return json.userData;
      })
      .catch(error => dispatch(fetchUserDataFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}