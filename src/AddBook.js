import apiURL from './myURL';
import React, { Component } from 'react';
import axios from 'axios';


class AddBook extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      id: '',
      bookname: '',
      author: '',
      isbn: ''
    };
  }

  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  handleSubmit = event => {
    event.preventDefault();

    const { bookname, author, isbn } = this.state;

    axios
      .post(apiURL+'/book', { bookname, author, isbn })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <div className="content">
        <h2>Add Book</h2>
        <form onSubmit={this.handleSubmit}>
            <label>
            Name:
            <input type="text" name="bookname" onChange={this.onChange} />
            </label>
            <label>
            Author:
            <input type="text" name="author" onChange={this.onChange} />
            ISBN:
            <input type="text" name="isbn" onChange={this.onChange} />
            </label>
            <button className="button" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddBook;