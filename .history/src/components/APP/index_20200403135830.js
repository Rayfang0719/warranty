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
      show:true
    }
  }

  formSubmit(){
    this.setState({
      show:false
    })
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
  });
  }
  render(){
  return (
    <div className="App">
      <Header/>

     { this.state.show &&<Form formSubmit={this.formSubmit} />} 
     { !this.state.show && <Thank />}
      
     
    </div>
  );
}
}

export default App;
