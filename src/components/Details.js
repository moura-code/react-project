import Container from 'react-bootstrap/Container'
import React from "react"
import {useParams} from "react-router-dom"
import data from "../data"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button'
function Details() {
    const {productId} = useParams()
    const thisProduct = data.find(prod => prod.id === productId)
 
    return (
        <div  className="mb-2 container">
        
       
            <img src={thisProduct.image} className="imagen" />
            
            <div className='container center2 center3'>
            <h1>{thisProduct.name}:</h1>
            <p>{thisProduct.description}</p>
            </div>
        
            <div className='container center2 center3 verde'>
                <Row>
                ${thisProduct.price}
                <Col><Button className='button2'>Buy</Button></Col>
                </Row>
            </div>

      </div>
    )
}

export default Details