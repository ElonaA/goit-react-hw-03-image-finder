import React, { Component } from 'react';
import PropTypes from "prop-types";
import Header from '../Containers/Header'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
import s from "./Searchbar.module.css";

export default class Searchbar extends Component {

  static propTypes = {
  onSubmit: PropTypes.func.isRequired,
  };

  state = {
    search: '',
  } 

  reset = () => {
    this.setState({ search: '' });
  };
  

  onSubmitForm = e => {
    const { search } = this.state;

    e.preventDefault();
    
    if (search.trim() === '') {
      toast.error('Enter search word');
      return;
    }

    this.props.onSubmit(search);

    this.reset();
  };

  onChangeInput = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase() });
  };

  render() {
    const { search } = this.state;

    return (
      
      <header>
      <div className={s.containerHeader}>
         <Header />
        <form  onSubmit={this.onSubmitForm} className={s.form}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>
          
          <input
            className={s.input}
            type="text"
              autoFocus
              autoComplete="off"
            placeholder="Search images and photos"
            value={search}
            onChange={this.onChangeInput}
          />
          </form>
          </div>
      </header>      
    );
  }
};



