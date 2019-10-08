import React, { Component } from 'react';
import MessageItem from './MessageItem';
import PropTypes from 'prop-types';

export default class Messages extends Component {
  render() {
    return this.props.messages.slice().reverse().map((message) => (
      <MessageItem key={message.id} message={message} />
    ));
  }
}

// Prop Types
Messages.propTypes = {
  messages: PropTypes.array.isRequired
};
