import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakedata from '../Fakedata/Fakedata';
import FoodDetail from '../FoodDetail/FoodDetail';
const Detail = () => {
  
    const {type} = useParams();
    const foodsType = fakedata.filter(fd=>fd.type===type)
  const [foods,setFood] = useState(foodsType)
    return (
        <div className="container">
            
        <div className="row">
        {
              foods.map( food=> <FoodDetail foodsType={food}></FoodDetail>)
          }
        </div>
        </div>
    );
};

export default Detail;