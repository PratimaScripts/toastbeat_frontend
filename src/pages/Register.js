import React, {useState} from 'react';
import { Button, Container, Form, Row, Image, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Register() {

    const [formInput, setFormInput] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        cuisinePref: ""
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
            formInput.cuisinePref === ""
        ){
            setFormInput({error: "Please fill all the input!"})
            return false
        }
        
        let type = formInput.cuisinePref;
        var log;
        if (type ==="cuisine"){
            log = "cuisine"
        }
        else if (type === "italian"){
            log = "italian"
        }
        else if (type === "bakedgoods"){
            log = "bakedgoods"
        }
        else {
            setFormInput({error: "Select Preference type!"})
            return false
        }
        
        

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
                            <Form.Control name="cuisinePref" onChange={handleChange} value={formInput.type} as="select" defaultValue="Choose...">
                                <option value="chinese">Chinese</option>
                                <option value="italian">Italian</option>
                                <option value="bakedgoods">Baked Goods</option>
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
