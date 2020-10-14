import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "../styles/Register.css";

export default function Register() {
  return (
    <div>
      <div className="container">
        <Form>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Full Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="fullname" placeholder="Full Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="formHorizontalAddress">
            <Form.Label column sm={2}>
              Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="address" placeholder="Address" />
            </Col>
          </Form.Group>

          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Female"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Male"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Register</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
