import axios from 'axios';
import React, {useState} from 'react';
import { Button, Container, Form, Row, Image, Col} from 'react-bootstrap';
import { Link,  useHistory } from 'react-router-dom';

export default function Register() {
    let history = useHistory();

    const [formInput, setFormInput] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        cuisine: ""
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
            formInput.name === "" &&
            formInput.email === "" &&
            formInput.password === "" &&
            formInput.cuisine === ""
        ){
            setFormInput({error: "Please fill all the input!"})
            return false
        }

        const data = {
            username: formInput.username, 
            name: formInput.name,
            email: formInput.email,
            password: formInput.password,
            cuisine: formInput.cuisine
        }
        
        axios.post(`http://localhost:3001/auth/register`, data )
        .then(res => {
            console.log(res.data);
            history.push("/login");
        })
        .catch(err =>{
            console.log(err.response.data.error)
        })

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    return (
        <Container className="mt-3">        
            <Row>
                <Col>
                    <div>
                        <Image src="./img/register_bg.jpg" style={{border:"none", transform: "translateY(50%)", width: "auto", maxWidth: "100%"}}/>
                    </div>
                </Col>
                <Col>
                    <Form id="form" onSubmit={handleSubmit} style={{width: "80%", marginRight: "20%", marginTop: "20%"}}>
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

                        <Form.Group controlId="formBasicEmail">
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

                        <Form.Group controlId="formBasicPassword">
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

                        <Form.Group controlId="formGridCuisine">
                            <Form.Label>Cuisine Preference</Form.Label>
                            <Form.Control controlId="formCuisinePref" name="cuisine"  onChange={handleChange} value={formInput.cuisine} as="select" required>
                                <option default={true} value="">Choose...</option>
                                <option value="1">Chinese</option>
                                <option value="2">Italian</option>
                                <option value="3">Baked Goods</option>
                            </Form.Control>
                        </Form.Group>
                      
                        <Button variant="primary" className="mr-3" type="submit">
                            Register
                        </Button>
                        <Form.Text className="text-muted mb-2">
                            Already have an Account?
                        </Form.Text>
                        <Link className="btn btn-outline-success" style={{textDecoration: "none"}} to="/login">Login</Link>
                    </Form>  
                </Col>        
            </Row>
        </Container>
    )
}
