import React, { Component } from 'react';

export default class Search extends Component {
 state = {
     searchText: ''
 }

 onSearchChange = e => {
     this.setState({ searchText: e.target.value});
 }
  handleSubmit = e => {
      e.preventDefault();
      this.props.onSearch(this.searchItem.value);
      e.currentTarget.reset();

  }
  render(){
    return(
      <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.searchItem = input}
               placeholder="Search"/>
        <button type="submit" className="search-button"> </button>
      </form>
    );
   }
}