import logo from './logo.svg';
import './App.css';
import BookList from './BookList.js';
import AddBook from './AddBook.js';
import UpdateBook from './UpdateBook.js';
import DeleteBook from './DeleteBook.js';
import Home from './Home.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

return (

<Router>
  <div className="App">
      <div style={{backgroundColor: "#F58401", padding: '60px'}}>
        <ul>
            <div style={{fontSize: '25px'}}><Link to="/">HOME</Link></div>

            <div><Link to="/addBook">ADD BOOK</Link></div>

            <div><Link to="/deleteBook">DELETE BOOK</Link></div>

            <div><Link to="/updateBook">UPDATE BOOK</Link></div>
        </ul>
        </div>
        <Switch>
          <Route path="/addBook">
            <AddBook />
          </Route>
          <Route path="/deleteBook">
            <DeleteBook />
          </Route>
          <Route path="/updateBook">
            <UpdateBook />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <div>
          <BookList />
        </div>


  </div>
</Router>
)
}

export default App;