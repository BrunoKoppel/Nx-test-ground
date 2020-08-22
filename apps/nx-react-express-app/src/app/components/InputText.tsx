import React, { useEffect, useState} from 'react';
import { disconnect } from 'process';

export default class InputText extends React.Component<{},{name: string, age: number, data: object}> {

  constructor(props){
    super(props);
    this.state = { name: '', age: 0 , data: []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const age = this.state.age;
    const info = {name: name, age: age};
    const data = [this.state.data, info];
    data.push(info);
    this.setState({
      data: data
    });

    this.render() {
      return(
        <>
        {data}
        </>
      )
    };
   };
 
  render() {
    return (
      <React.Fragment>
        <form className="form-inline" onSubmit={this.handleSubmit} >
          <input
              type="text"
              className="form-control mb-2 mr-sm-2 mb-sm-0"
              placeholder="Name"
              ref={input => this.state.name }/>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input
              type="text"
              className="form-control"
              placeholder="Age"
              ref={input => this.state.age}/>
          </div>  
          <button 
              type="submit" 
              className="btn btn-primary">Save
          </button>
        </form>
        
      </React.Fragment>
    );
  }
 };