import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    img: "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL200_SR200,200_.jpg",
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
  {
    id: 2,
    img: "https://images-eu.ssl-images-amazon.com/images/I/41%2BgrDTP2FL._AC_UL200_SR200,200_.jpg",
    title: "DO EPIC SHIT",
    author: "Ankur Warikoo",
  },
  {
    id: 3,
    img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg",
    title: "Atomic Habits:The life-changing million copy bestseller",
    author: "James Clear",
  },
  {
    id: 4,
    img: "https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García",
  },
  {
    id: 5,
    img: "https://images-eu.ssl-images-amazon.com/images/I/818e%2Bfq7%2BBL._AC_UL200_SR200,200_.jpg",
    title: "Word Power Made Easy",
    author: "Norman Lewis",
  },
  {
    id: 6,
    img: "https://images-eu.ssl-images-amazon.com/images/I/711c-uf6AFL._AC_UL200_SR200,200_.jpg",
    title: "My First Library: Boxset of 10 Board Books for Kids",
    author: "Wonder House Books",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        // const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));