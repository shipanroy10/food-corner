import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodItems.css'

const FoodItems = (props) => {
    const {img,type} = props.item;

  
    return ( 
        <>
   
      <div className="three-items">
      <div className="food-name" style={{backgroundImage:`url(${img})`,padding:'5px',margin:'5px',
              width:'50vh',height:'50vh',backgroundSize:'100vh',backgroundPosition:'center',backgroundRepeat:'no-repeat'}} >
            <Link to={`/detail/${type}`}> <h1 > {type} </h1></Link>
              </div>
      </div>
            </>
          );
      };

export default FoodItems;