import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {caller} from './action/index';

class App extends React.Component{

  constructor()
  {
    super();
    this.state={
      email : ''
    }
  }
  call=(e)=>
  {
    e.preventDefault();
    this.props.dispatch(caller(this.state.email));
  }

  handleChange =(e)=>
  {
    const {target} = e;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]:value
    })
  }

  render()
  {
 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* <button onClick={this.call}>Click me</button> */}
          </p>
          <form onSubmit={this.call}>
          <input name="email" value={this.state.email} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
            </form>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


function mapStateToProps(state) {

  return {
    getState:state
  };

}
export default connect(mapStateToProps)(App);
