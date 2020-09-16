import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {
  const [message, setMessage] = useState('My message 2');

  useEffect(() => {
    fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(obj => {
      setMessage(obj.message);
    });

  },[]);
  
  return (
    <div className="App">
      {message}
    </div>
  );
}
/*
type AppState = {
  message: string;
};
class App extends React.Component<{}, AppState> {
  state: AppState = {
    message: 'Default message',
  };

  componentDidMount(){
    fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(obj => {
      this.setState({message: obj.message});
    });
  }

  render() {
    return (
      <div>
         {this.state.message}
      </div>
    );
  }
}
*/
export default App;
