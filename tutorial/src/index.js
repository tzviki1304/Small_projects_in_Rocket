import React from 'react';
import ReactDom from 'react-dom';

// css
import './index.css';
// setup 
const firstBook ={
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
}
const secondBook ={
  img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL.AC_UL200_SR200,200_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen',
}

function BookList() {
  return (
    <section className='booklist' > 
      <Book 
        img={firstBook.img} 
        title={firstBook.title} 
        author={firstBook.author} 
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum animi voluptas temporibus quo delectus pariatur, hic voluptatum accusantium illo.</p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}  />
    </section>
  )
}

const Book = ({ img , title , author , children }) => {
  return  (
    <article className='book' >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<BookList /> , document.getElementById('root'));