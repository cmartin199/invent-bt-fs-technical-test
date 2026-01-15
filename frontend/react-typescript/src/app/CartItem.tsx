import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
interface CartItemProps {
  label: string;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const CartItem = ({ label, quantity, setQuantity }: CartItemProps) => {
  return (
    <Card.Body>
      <Form.Group className="mb-3" controlId="exampleForm.name">
        <Form.Label>{label}</Form.Label>
        <Button
          variant="secondary"
          type="reset"
          onClick={() => setQuantity(quantity + 1)}
        >
          Add
        </Button>
        <Button
          variant="secondary"
          type="reset"
          onClick={() => quantity > 0 && setQuantity(quantity - 1)}
        >
          remove
        </Button>
        <Form.Label>
          currently selected is {quantity} {label}
        </Form.Label>
      </Form.Group>
    </Card.Body>
  );
};
