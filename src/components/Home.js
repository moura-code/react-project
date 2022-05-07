import React, {useState} from "react";
import Row from 'react-bootstrap/Row'

import '../CSS/App.css'
import data from"../data"
import Product from "./Product";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
export default function Home(props) {
        const [products, setfilter] = useState(data)
    return(
    <div className="container center3">
        <h1>ECommecer</h1>
        <div className="mb-3 container border">
            <h2>Products</h2>
            <div  className="mb-2">
               <Row>
            {products.map((product) => (
                <Product key={product.id} product={product}></Product>))}
                </Row>
            </div>

        </div>
    </div>


    );
  }
  
  