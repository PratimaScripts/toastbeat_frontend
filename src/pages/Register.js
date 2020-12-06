import axios from "axios";
import React, { useState } from "react";
import { Button, Container, Form, Row, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register() {
  // let history = useHistory();
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const [formInput, setFormInput] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    cuisine: "",
  });

  const [reset, setReset] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const reset_modal = () => {
    document.getElementById("form").reset();
    setFormInput({
      ...formInput,
      username: "",
      name: "",
      email: "",
      password: "",
      cuisine: "",
    });
    setReset(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (
      formInput.username === "" &&
      formInput.name === "" &&
      formInput.email === "" &&
      formInput.password === "" &&
      formInput.cuisine === ""
    ) {
      setFormInput({ error: "Please fill all the input!" });
      return false;
    }

    const data = {
      username: formInput.username,
      name: formInput.name,
      email: formInput.email,
      password: formInput.password,
      cuisine: formInput.cuisine,
    };
    setIsButtonLoading(true);
    axios
      .post(`http://localhost:3001/auth/register`, data)
      .then((res) => {
        setIsButtonLoading(false);
        console.log(res.data);
        reset_modal();
        setSuccess(true);
        // history.push("/login");
      })
      .catch((err) => {
        console.log(err.response.error);
      });

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const close_modal = () => {
    setReset(false);
    setSuccess(false);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <div>
            <Image
              src="./img/register_bg.jpg"
              style={{
                border: "none",
                transform: "translateY(50%)",
                width: "auto",
                maxWidth: "100%",
              }}
            />
          </div>
        </Col>
        <Col>
          <Form
            id="form"
            onSubmit={handleSubmit}
            style={{ width: "80%", marginRight: "20%", marginTop: "20%" }}
          >
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="User Name"
                name="username"
                onChange={handleChange}
                value={formInput.username}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={formInput.name}
              />
            </Form.Group>

            <Form.Group controlid="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                name="email"
                value={formInput.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlid="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Password"
                value={formInput.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlid="formGridCuisine">
              <Form.Label>Cuisine Preference</Form.Label>
              <Form.Control
                controlid="formCuisinePref"
                name="cuisine"
                onChange={handleChange}
                value={formInput.cuisine}
                as="select"
                required
              >
                <option default={true} value="">
                  Choose...
                </option>
                <option value="1">Chinese</option>
                <option value="2">Italian</option>
                <option value="3">Baked Goods</option>
              </Form.Control>
            </Form.Group>

            <Button
              variant="primary"
              className="mr-3 text-center"
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
              ) : 
                <p className="m-0">Register</p>
              }
            </Button>
            <Button
              type="button"
              onClick={() => setReset(true)}
              className="ml-3 text-center"
            >
              Reset
            </Button>
            <Form.Text className="text-muted mb-2">
              Already have an Account?
            </Form.Text>
            <Link
              className="btn btn-outline-success"
              style={{ textDecoration: "none" }}
              to="/login"
            >
              Login
            </Link>
          </Form>
        </Col>
      </Row>

      {success ? (
        <div className="modalMain">
          <div className="modal_main">
            <div className="modal_head">
              <div className="modal_title">
                <h2 className="text-center">User Registered</h2>
              </div>
            </div>

            <div className="modal_body text-center">
              Thanks for resistering. You're now redirected to the login page.
              Enjoy our service.
            </div>

            <div className="modal_footer">
              <p className="text-center">
                <Button
                  className="mb-3 text-center"
                  href="/login"
                  onClick={() => close_modal()}
                >
                  Okay
                </Button>
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {reset ? (
        <div className="modalMain">
          <div className="modal_main">
            <div className="modal_head">
              <div className="modal_title">
                <h2 className="text-center">Are You Sure?</h2>
              </div>
            </div>

            <div className="modal_body text-center">
              This will clear all the information on this page. Are you sure
              you’d like to continue?
            </div>

            <div className="modal_footer">
              <p className="text-center">
                <Button
                  className="mb-3 text-center mr-3"
                  onClick={() => reset_modal()}
                >
                  Yes
                </Button>
                <Button
                  onClick={() => setReset(false)}
                  className="mb-3 text-center"
                >
                  Cancel
                </Button>
              </p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
}
// const Loader = ()
