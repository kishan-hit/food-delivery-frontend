import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import {useDispatch} from "react-redux"
import {addToCart} from "../actions/cartAction"

const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addToCartHandler = (pizza) => {
    dispatch(addToCart(pizza,quantity,varient))
    alert("Item successfull added to cart")
  }
  return (
    <>
      <Card style={{ width: "18rem", marginTop: "30px" }}>
        <Card.Img
          variant="top"
          src={pizza.image}
          style={{ height: "200px", cursor: "pointer" }}
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <hr />
          <Card.Text>
            <Row>
              <Col md={6}>
                <h6>Varients</h6>
                <select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                >
                  {pizza.varients.map((varient) => (
                    <option>{varient}</option>
                  ))}
                </select>
              </Col>
              <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option value={i + 1}>{i + 1}</option>
                  ))}
                </select>
              </Col>
            </Row>
          </Card.Text>
          <Row>
            <Col md={6}>Price : {pizza.prices[0][varient] * quantity} /-RS</Col>
            <Col md={6}>
              <Button className="bg-warning text-white" onClick={()=>addToCartHandler(pizza)}>Add to cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/*modal*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Card.Img
              variant="top"
              src={pizza.image}
              style={{ height: "200px" }}
            />
          </div>
          <div>
            <h5>Description</h5>
            <h6>{pizza.description}</h6>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pizza;
