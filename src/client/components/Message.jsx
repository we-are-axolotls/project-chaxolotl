/**
 * ************************************
 *
 * @module  Message
 * @author
 * @date
 * @description presentation component that renders a single message
 *
 * ************************************
 */

import React from 'react';

const Message = ({ key, currentUser, created_by, created_at, message }) => (
  <div id={key} className={currentUser.id === created_by ? "me" : "other"}>
    <div className="created-parent">
      <p className="created-by">{created_by}</p>
      <p className="created-at">{created_at}</p>
    </div>
    
    <p className="message">{message}</p>
	</div>
);


// style for Message component (in camel case)
const styles = {
  me: {

  }, 

  other: {

  },

  createdParent: {

  },

  createdBy: {

  },

  createdAt: {

  }
};

export default Message;