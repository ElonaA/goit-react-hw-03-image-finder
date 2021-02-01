import React, { Component } from "react";

import {ToastContainer} from 'react-toastify';

import Footer from './components/Containers/Footer'
import Section from './components/Containers/Section'

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';


class App extends Component {
  state = {
    search: '',
   };

  handleChange = search => {
    this.setState({search});
  };

  handleSearch = search => {
    if (search === this.state.search || search === '') return;
    this.setState({ search });
  };


  render() {
    const { search } = this.state;
    
    return (
      <div className="main">

        <Searchbar onSubmit={this.handleChange} />

        <Section> <ImageGallery search={search} /></Section>

        <Footer />

        <ToastContainer autoClose={3000} />

      </div>
    );
  }
}

export default App;