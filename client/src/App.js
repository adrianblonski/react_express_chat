import React, { Component } from 'react';

import Header from './components/Header';
import Messages from './components/Messages';
import SendMessage from './components/SendMessage';

import './App.css';

class App extends Component {
  state = {
    user: 'Guest',
    messages: [
      {
        id: 0,
        author: 'Tester 1',
        content: 'A very important message A very important message A very important message A very important message'
      },
      {
        id: 1,
        author: 'Tester 2',
        content: 'I see'
      },
      {
        id: 2,
        author: 'Tester 1',
        content: 'What do u see?'
      },
      {
        id: 3,
        author: 'Tester 2',
        content: 'YOUR IMPORTANT MESSAGE!'
      },
      {
        id: 4,
        author: 'Tester 1',
        content: 'Thats fine for me xd'
      },
      {
        id: 5,
        author: 'Tester 2',
        content: 'Good, cya'
      },
    ]
  }

  getMessages = async() => {
    const response = await fetch('/api/messages');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);

    return body;
  }

  sendMessage = (content) => {
    const newItem = {
      id: this.state.messages[this.state.messages.length - 1].id + 1,
      author: this.state.user,
      content
    };
    this.setState({
      user: this.state.user,
      messages: [...this.state.messages, newItem]
    });
  }

  setUsername = (name) => {
    this.setState({
      user: name,
      messages: this.state.messages
    });
  }

  componentDidMount = () => {
    /*this.getMessages()
      .then(res => {
        this.setState({ messages: [...res] });
      });*/
  }

  render() {
    const { user, messages } = this.state;

    return (
      <div className="App">
        <div className="container">
          <Header username={user} />
          <div className="chat-container">
            <Messages messages={messages} />
          </div>
          <SendMessage sendMessage={this.sendMessage} setUsername={this.setUsername} />
        </div>
      </div>
    );
  }
}

export default App;
