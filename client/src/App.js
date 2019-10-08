import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    renderedResponse: ''
  }

  getResponse = async() => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);

    return body;
  }

  componentDidMount = () => {
    this.getResponse()
      .then(res => {
        const someData = res;
        this.setState({ renderedResponse: someData.express });
      })
  }

  render() {
    const { renderedResponse } = this.state;

    return (
      <div className="App">
        <h2>Call out to API!</h2>
        <p>{renderedResponse}</p>
      </div>
    );
  }
}

export default App;
