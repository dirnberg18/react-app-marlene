
import apiURL from './myURL';

import React, { Component } from 'react';
  import axios from 'axios';

  class UpdateBook extends Component {
    constructor() {
      super();
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateInputValue = this.updateInputValue.bind(this);
      this.state = {
        id: 1,
        name: '',
        author: '',
        isbn:''
      };
    }

    onChange = e => {
      const state = this.state;
      state[e.target.name] = e.target.value;
      this.setState(state);
    };

    updateInputValue(val) {
      this.setState({ id: val.target.value });
    }
    handleSubmit = event => {
      event.preventDefault();
      const id = this.state.id;
      const { name, author, isbn } = this.state;

      axios
        .put(apiURL+'/book/' + id, { name, author, isbn
          })
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
          <h2>Update Book</h2>
          <label>id:</label>
          <input
            type="number" name="id" onChange={this.updateInputValue} value={this.state.uid} min="1" />
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={this.state.className}  onChange={this.onChange}/>
            </label>
            <label>
              Author:
              <input type="text" name="author" onChange={this.onChange} />
            </label>
            <label>
              ISBN:
            <input type="text" name="isbn" onChange={this.onChange} />
            </label>

            <button className="button" type="submit">
              Update
            </button>
          </form>
        </div>
      );
    }
  }

  export default UpdateBook;