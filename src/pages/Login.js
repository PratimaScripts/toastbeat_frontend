// /* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import { Button, Col, Form, Row, Image, Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <Container>        
            <Row>
                <Col>
                    <Form onSubmit={(e) => UserLogin(e)} style={{marginTop: "20%"}} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  id="formEmail"/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" id="formPassword"/>
                        </Form.Group>
                        
                        
                        <Button variant="primary" className="mr-3" type="submit">
                            Login
                        </Button>
                        <Form.Text className="text-muted mb-2">
                            Haven't create an Account yet?
                        </Form.Text>
                        <Link className="btn btn-outline-success" style={{textDecoration: "none"}} to="/register">Register an User</Link>
                         
                    </Form> 
                </Col>
                <Col>
                    <div>
                        <Image src="./img/login_bg.jpg" thumbnail style={{border:"none"}}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

function UserLogin(e){
    e.preventDefault();
    let request = {
        email: document.getElementById('formEmail').value,
        password: document.getElementById('formPassword').value
    }

    axios.post('http://localhost:3001/login', request)
    .then(resp => {
        alert(resp.data.message)
    })
    .catch( err => {
        console.log(err);
    })
}
