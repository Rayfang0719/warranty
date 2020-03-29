import React from 'react';
import './style.css';

import Header from '../Header';
import Form from '../Form';
import Thank from '../Thank'

class App extends React.Component {
  constructor(props){
    super();
    this.formSubmit =this.formSubmit.bind(this);
    this.state = {
      active:true
    }
  }

  formSubmit(){
    this.setState({
      active:false
    })
  }
  render(){
  return (
    <div className="App">
      <Header/>

      <Form formSubmit={this.formSubmit} className='hidden'/>
      <Thank />
     
    </div>
  );
}
}

export default App;
