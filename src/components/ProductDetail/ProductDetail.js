import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Book from '../Book/Book';
import fakeData from '../Fakedata/Fakedata';
import './ProductDetail.css'
const ProductDetail = () => {
    const {name} = useParams();
  
    const fDetail = fakeData.find(fd=>fd.name===name);
    console.log(fDetail)
  

    return (
        <div className="container-fluid">
            
        
           <Book fDetail={fDetail}></Book>
        

        </div>
    );
};

export default ProductDetail;