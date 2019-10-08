import React, { Component } from 'react';

import Header from './components/Header';
import Messages from './components/Messages';
import SendMessage from './components/SendMessage';

import './App.css';

class App extends Component {
  state = {
    user: 'Guest',
    messages: []
  }

  getMessages = async() => {
    const response = await fetch('/api/messages');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);

    return body;
  }

  sendMessage = async(content) => {
    const newItem = {
      author: this.state.user,
      content
    };

    fetch('/api/messages', {
      method: 'post',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newItem)
    }).then((res) => {
      //console.log(res);
    });
  }

  setUsername = (name) => {
    this.setState({
      user: name,
      messages: this.state.messages
    });
  }

  componentDidMount = () => {
    this.interval = setInterval(() => 
      this.getMessages()
      .then(res => {
        this.setState({ messages: [...res] });
      }), 500);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
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
