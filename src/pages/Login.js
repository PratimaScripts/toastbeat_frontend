// /* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from "react";
import { Button, Col, Form, Row, Image, Container } from "react-bootstrap";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (formInput.username === "" && formInput.password === "") {
      setFormInput({ error: "Please fill all the input!" });
      return false;
    }

    const data = {
      username: formInput.username,
      password: formInput.password,
    };

    //user interactivity
    setIsButtonLoading(true);

    axios
      .post(`http://localhost:3001/auth/login`, data)
      .then((res) => {
        setIsButtonLoading(false);
        // console.log(res.data);
        localStorage.setItem("token", res.data.token);
        // props.setLoggedIn(true)
        setTimeout(() => {
          history.push(`/menu/${res.data.cuisine}`);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response);
      });

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} style={{ marginTop: "20%" }}>
            <Form.Group controlid="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter Username"
                value={formInput.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlid="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formInput.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>

            <Button
              variant="primary"
              className="mr-3"
              type="submit"
              disabled={isButtonLoading}
            >
              {isButtonLoading ? (
                <svg
                  version="1.1"
                  id="L9"
                  style={{
                    width: "24px",
                    height: "24px",
                    display: "inline-block",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enableBackground="new 0 0 0 0"
                  xmlSpace="preserve"
                >
                  <path
                    fill="#fff"
                    d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                  >
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      dur="1s"
                      from="0 50 50"
                      to="360 50 50"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              ) : (
                <p className="m-0">Login</p>
              )}
            </Button>
            <Form.Text className="text-muted mb-2">
              Haven't create an Account yet?
            </Form.Text>
            <Link
              className="btn btn-outline-success"
              style={{ textDecoration: "none" }}
              to="/register"
            >
              Register an User
            </Link>
          </Form>
        </Col>
        <Col>
          <div>
            <Image
              src="./img/login_bg.jpg"
              thumbnail
              style={{ border: "none" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
