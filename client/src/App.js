import React, { Component } from 'react';

import Header from './components/layout/Header';
import Messages from './components/Messages';
import SendMessage from './components/SendMessage';

import './App.css';

class App extends Component {
  state = {
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

  sendMessage = (author, content) => {
    const newItem = {
      id: this.state.messages[this.state.messages.length - 1].id + 1,
      author,
      content
    };
    this.setState({
      messages: [...this.state.messages, newItem]
    });
  }

  componentDidMount = () => {
    /*this.getMessages()
      .then(res => {
        this.setState({ messages: [...res] });
      });*/
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <div className="container">
          <Header />
          <div className="chat-container">
            <Messages messages={messages} />
          </div>
          <SendMessage sendMessage={this.sendMessage} />
        </div>
      </div>
    );
  }
}

export default App;
