import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodDetail.css'
const FoodDetail = (props) => {
  
     const  foods  = props.foodsType;
   const {img,id,name} = foods;
 
   
    return (
        <div className="detail" style={{backgroundImage:`url(${img})`}}>
  
   <Link to={`/productDetail/${name}`}>   <h3>  See Detail </h3></Link>
          
        </div>
    );
};




export default FoodDetail;