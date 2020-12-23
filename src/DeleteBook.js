
import apiURL from './myURL';

import React, { Component } from 'react';
  import axios from 'axios';

  class DeleteBook extends Component {
    constructor() {
      super();
      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateInputValue = this.updateInputValue.bind(this);
      this.state = {
        id: 1,

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
      

      axios
        .delete(apiURL+'/book/' + id)
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
          <h2>Delete Book</h2>
          <label>id:</label>
          <input
            type="number" name="id" onChange={this.updateInputValue} value={this.state.uid} min="1" />
          <form onSubmit={this.handleSubmit}>
            

            <button className="button" type="submit">
              Delete
            </button>
          </form>
        </div>
      );
    }
  }

  export default DeleteBook;