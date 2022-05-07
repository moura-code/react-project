import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link } from 'react-router-dom';
import '../CSS/App.css'
import Col from 'react-bootstrap/Col'
export default function Product(props) {
    return(
        <Col>
        <Card style={{ width: '18 rem' }}>
        <Card.Img variant="top" src={props.product.image} />
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Text>
           {props.product.description}
          </Card.Text>
          
            <Link className="link" to={"/" + props.product.id}>
                <Button>
                    Details</Button>
            </Link>
        </Card.Body>
      </Card>
      </Col>
    );
  }
  
  