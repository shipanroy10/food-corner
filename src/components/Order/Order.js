import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../Fakedata/Fakedata';
import './Order.css'
const Order = () => {
const {name} = useParams();
const detail = fakeData.find(fd=>fd.name===name);
const {price} = detail;

console.log(detail)

    return (
      <div>
            <div className="order" >
            <h1> The {name} is ordered successfully </h1>
            <p>price : $ {price} </p>
              <p>vat : $ {price/10} </p>
              <p>Grandtotal : $ {price+price/10} </p>

          <Link to="/detail">  <h3>would you like to add more ?  </h3></Link>
        </div>
      </div>
    );
};

export default Order;