import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'; 

class Search extends Component {
 state = {
     searchText: ''
 }

 onSearchChange = e => {
     this.setState({ searchText: e.target.value});
 }
  handleSubmit = e => {
    e.preventDefault();
    let searchItem = this.searchItem.value;
    let path = `/search?q=${searchItem}`;
    this.props.history.push(path);
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
               placeholder="Search"
               required 
               />
        <button type="submit" className="search-button">Search</button>
      </form>
    );
   }
}

export default withRouter(Search);