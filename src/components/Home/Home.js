import React, { useState } from 'react';

import './Home.css';
import items from '../Fakedata1/Fakedata1'

import FoodItems from '../FoodItem/FoodItems';








const Home = () => {
    console.log(items)
 
       const [item,setItem]= useState(items)
  


    return (

    <div className="container" >
     
          
     
        <div className="items">
       
          <div className="row">
          {
              item.map(item=><FoodItems key={item.type} item={item}></FoodItems>)
          }
          </div>
 

         </div>  
    </div>
          
              

    );
};

export default Home;