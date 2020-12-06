// /* eslint-disable jsx-a11y/anchor-is-valid */

import React, {useState} from 'react'
import { Button, Col, Form, Row, Image, Container } from 'react-bootstrap';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

export default function Login() {
    let history = useHistory();
    const [formInput, setFormInput] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        
        if (
            formInput.username === "" &&
            formInput.password === "" 
        ){
            setFormInput({error: "Please fill all the input!"})
            return false
        }

        const data = {
            username: formInput.username,
            password: formInput.password
        }
        
        //user interactivity 
                
        axios.post(`http://localhost:3001/auth/login`, data )
        .then(res => {
            // console.log(res.data);
            localStorage.setItem("token", res.data.token);
            // props.setLoggedIn(true)
            setTimeout(() => {
                history.push(`/menu/${res.data.cuisine}`);
            }, 2000); 
        })
        .catch(err =>{
            console.log(err.response)
        })

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    return (
        <Container>        
            <Row>
                <Col>
                    <Form  onSubmit={handleSubmit} style={{marginTop: "20%"}} >
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="username" 
                            placeholder="Enter Username"
                            value={formInput.username}
                            onChange={handleChange}   
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            name="password" 
                            value={formInput.password}
                            onChange={handleChange} 
                            placeholder="Password" />
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

