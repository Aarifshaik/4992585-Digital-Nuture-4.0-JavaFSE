import React from 'react';

const books = [
    {BookName:"The Essentials of life",Price: 12},
    {BookName:"Be a Real Man",Price:34},
    {BookName:"Good Father",Price:56},
    {BookName:"Great Son",Price:78}
]

const BookDetails = () => (
  <div>
    <h2>📘 Book Details</h2>
    {books.map((book)=>
        <div>
            <h4>Book Name: {book.BookName}</h4>
            <h4>Price: {book.Price}</h4>
        </div>
    )}
  </div>
);

export default BookDetails;