import React from 'react'
import Book from './Book'
import books from './books'

const BookList = () => {
    return (
        <section className="book-list">
            <h1 className="book-list-title">Book List</h1>
            <ul className="book-list">
                {books.map((book, index) => (
                    <li key={index} className="book-list-item">
                        <Book {...book} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default BookList