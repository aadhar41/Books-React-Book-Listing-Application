import React from 'react';

const Book = (props) => {
    const { title, author, image, price } = props;
    const handleClick = () => {
        alert('Book added to cart!');
    }

    return (
        <article className="book">
            <img src={image} alt={title} className="book-image" />
            <h1 className="book-title">{title}</h1>
            <h2 className="book-author">{author}</h2>
            <h3 className="book-price">{price}</h3>
            <div className="book-footer">
                <button className="book-button" onClick={handleClick}>Add to Cart</button>
            </div>
        </article>
    );
}

export default Book;
