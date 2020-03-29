import React from 'react';
import './style.css';

import Header from '../Header';
import Form from '../Form'

class App extends React.Component {
  constructor(props){
    super();
    this.formSubmit =this.formSubmit.bind(this);
  }
  render(){
  return (
    <div className="App">
      <Header/>

      <Form formSubmit={this.formSubmit}/>
      <div>footer</div>
    </div>
  );
}
}

export default App;
