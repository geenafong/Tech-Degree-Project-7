import React, { Component } from 'react';
import './css/App.css';
import './css/index.css'
import apiKey from './config';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Search from './components/Search';
import Gallery from './components/Gallery';
import Nav from './components/Nav';
import NotFound from './components/NotFound';


export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      pictures: [],
      ocean: [],
      river: [],
      lake: [],
      loading: true
    }
  }
  componentDidMount() {
    this.performSearch();
    this.lakeSearch();
    this.oceanSearch();
    this.riverSearch();
  }

  performSearch = (searchItem = 'water') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchItem}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
      console.log('Error fetching and parsing data', error);
      });
    }

  

  lakeSearch = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=lake%20at%20sunset&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState(prevState => ({
        ...prevState,
        lake: response.data.photos.photo,
        loading: false
      }));
    })
    .catch(error => {
    console.log('Error fetching and parsing data', error);
    });
  }

  oceanSearch = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=turquoise%20ocean&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState(prevState => ({
        ...prevState,
        ocean: response.data.photos.photo,
        loading: false
      }));
    })
    .catch(error => {
    console.log('Error fetching and parsing data', error);
    });
  }
  riverSearch = () => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=rushing%20river&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState(prevState => ({
        ...prevState,
        river: response.data.photos.photo,
        loading: false
      }));
    })
    .catch(error => {
    console.log('Error fetching and parsing data', error);
    });
  }
  
  render() {
    return (
        <BrowserRouter>
          <div className="container"> 
             <Search onSearch={this.performSearch}/>
              
            <Nav 
             ocean={this.state.ocean}
             lakes={this.state.lake}
             river={this.state.river}
            />
            <Switch>
            {
              (this.state.loading)
              ? <h3 className='active'>Loading...</h3> 
              : <Route exact path='/' render={() => <Gallery data={this.state.pictures} />} /> };

               
                <Route exact path= '/search' render={() => <Gallery data={this.state.pictures} />} />

                <Route path= '/lake' render={() => <Gallery data={this.state.lake} />} />
                <Route path= '/ocean' render={() => <Gallery data={this.state.ocean} />} />
                <Route path= '/river' render={() => <Gallery data={this.state.river} />} />
                <Route component={ NotFound } />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

