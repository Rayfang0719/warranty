import React from 'react';
import './style.css';
import 'lib-flexible'
import Header from '../Header';
import Form from '../Form'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Header/>

      <Form/>
      <div>footer</div>
    </div>
  );
}
}

export default App;
