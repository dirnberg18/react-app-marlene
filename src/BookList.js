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
                
                {this.state.book.map(book => (
                    <li key={book.id}>
                     <br/>
                       <b>Book ID: </b>{book.id} <br/>
                       <b>Book Name: </b> {book.name} <br/>
                       <b>Author: </b> {book.author} <br/>
                       <b>ISBN: </b> {book.isbn} <br/>
                      <br/>
                    </li>
                ))}
                
            </div>
        );
    }
  }

  export default BookList;