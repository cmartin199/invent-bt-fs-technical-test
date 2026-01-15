import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import { CartItem } from "./CartItem";

function App() {
  const handleClick = () => {
    setTotalPrice(0.6 * quantityApples + 0.25 * quantityOranges);
  };

  const [quantityApples, setQuantityApples] = useState<number>(0);
  const [quantityOranges, setQuantityOranges] = useState<number>(0);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  return (
    <Col>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            The Shop
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Card>
          <Form>
            <CartItem
              label="apples"
              quantity={quantityApples}
              setQuantity={setQuantityApples}
            />
            <CartItem
              label="oranges"
              quantity={quantityOranges}
              setQuantity={setQuantityOranges}
            />

            <Card.Body>
              <Button variant="primary" type="button" onClick={handleClick}>
                Submit
              </Button>
            </Card.Body>
            <Form.Label data-testid="summary-price">
              total price is £{totalPrice}
            </Form.Label>
          </Form>
        </Card>
      </Container>
    </Col>
  );
}

export default App;
