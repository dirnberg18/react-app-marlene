import logo from './logo.svg';
import './App.css';
import BookList from './BookList.js';
import AddBook from './AddBook.js';
import UpdateBook from './UpdateBook.js';
import DeleteBook from './DeleteBook.js';





function App() {
  return (
    <div className="App">
      <div width={'100%'}style={{backgroundColor: "blue"}}>
      <h1 style={{color: "black"}}>OAMK Library</h1>
      </div>
      <DeleteBook/>
      <AddBook/>
      <UpdateBook/>
      <div>
      <BookList/>
      </div>
    </div>
  );
}

export default App;
