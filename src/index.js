import React from 'react';
import ReactDom from 'react-dom';
// import css
import './index.css';
const books = [
{
  id: 1,
  img:
   'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth',
 },
 {
  id: 2,
  img:
   'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen',
 },
 {
  id: 3,
  img:
   'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
  title: 'The Vanishing Half: A Novel',
  author: 'Brit Bennett',
 },
];

 
function BookList(){
  return (
  <section className="booklist">
     {books.map((book,index)=>{
     return  <Book key={book.id} {...book}></Book>
   })}
  </section>
  );
}

const Book =({img,title,author})=>{
 // const { img,title,author } =props;
const clickHandler = (e) => {
   console.log(e);
   console.log(e.target);
   alert('hello world');
}
const complexExample = (author) => {
   alert(author);

}
 return (
    <article className="book" onMouseOver={()=>{
       console.log(title)
    } }>
       <img src={img} alt=""/>
       <h1 onClick={()=>console.log(title)}>{title}</h1>
       <h4>{author}</h4>
       <button type="button" onClick={clickHandler}>boton</button>
       <button type="button" onClick={()=>complexExample(author)}>more complex example</button>
    </article>
   )
}

ReactDom.render(<BookList/>,document.getElementById('root'));