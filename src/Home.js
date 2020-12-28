
import React from 'react';
import BookList from './BookList';
import './homepage.css';
import logo from './oamk-logo.png';

const Home = () => {
    {
        return (
            <div>
                <div className='div-homepage'>
                    <h2>Welcome to OAMKs Library</h2>
                </div>
                <div>
                    <img src={logo} alt="Logo" width={'50%'} />
                </div>
                <div>
                    <h1>Booklist</h1>
                    <div> 
                        <BookList />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;
