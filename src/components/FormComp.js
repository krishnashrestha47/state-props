import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export const FormComp = ({ addUser }) => {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(name);
  };

  console.log(name);

  return (
    <Form onSubmit={handleOnSubmit} className="mt-5 ">
      <Form.Group className="mb-3 fs-1" controlId="formGroupName">
        <Form.Label>Enter your Full Name</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          placeholder="Your Name Here"
        />
      </Form.Group>
      <Button type="submit" variant="warning" size="lg">
        Add User
      </Button>
    </Form>
  );
};
