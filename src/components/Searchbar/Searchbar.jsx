import React, { Component } from 'react';
import PropTypes from "prop-types";
import Header from '../Markup/Header/Header';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
import {Inner, Form, Button, Label, Input} from "./Searchbar.styled";

export default class Searchbar extends Component {

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
      <Inner>
        <Header />
        <Form  onSubmit={this.onSubmitForm}>
          <Button type="submit">
            <Label>Search</Label>
          </Button>
          
          <Input
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos"
            value={search}
            onChange={this.onChangeInput}
          />
          </Form>
          </Inner>
      </header>      
    );
  }
};


Searchbar.propTypes = {
onSubmit: PropTypes.func.isRequired,
};