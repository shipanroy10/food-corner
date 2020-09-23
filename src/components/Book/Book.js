import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Book.css'
const Book = (props) => {
   const details = props.fDetail;
   const {img,price,name,type,sheaf,detail} = details;
    return (
       <div className="container">
            <div className=" book ">
            <div className="row">
           <div>
           <img src={img} alt=""/> 
           </div>
            
       
       <div className="second-half">
         
       <h1> {type} </h1>
            <h3>Food Name : {name} </h3>
            <p> {detail} </p>
            <p> sheaf : {sheaf} </p>
            <p>price : $ {price} </p>
          <Link to={`/order/${name}`}>  <Button variant="dark">Place Order</Button></Link>
           
       </div>
   
            </div>
        </div>
       </div>
    );
};

export default Book;