import React, { Component } from 'react';
import axios from 'axios';
import apiURL from './myURL';

  class BookList extends Component {
      constructor() {
      super();
        this.state = {
          book: []
        };
      }
      componentDidMount() {
        axios.get(apiURL+'/book')
        .then(res => {
          const book = res.data;
          this.setState({ book });
          console.log(book);
        })
        .catch(error => {
          console.log(error.response);
        });
      }
      render() {
        return (
            <div>
                <ul>
                {this.state.book.map(book => (
                    <li key={book.id}>
                      <br/>
                       Book ID: {book.id} <br/>
                       Book Name: {book.name} <br/>
                       Author: {book.author} <br/>
                       ISBN: {book.isbn} <br/>
                       <br/>
                    </li>
                ))}
                </ul>
            </div>
        );
    }
  }

  export default BookList;