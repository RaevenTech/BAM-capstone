import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "./Register.module.css";

const Register = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button className={styles.register_user_btn} onClick={handleShow}>
                Register to Bid
            </Button>
            <Modal
                className={styles.modal_body}
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header className={styles.modal_header_close} closeButton>
                    <Modal.Title>Register to bid</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {" "}
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=" First Name"
                                required
                            />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                required
                            />
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Phone number"
                            />
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue}
                            />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter valid email"
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword2"
                        >
                            <Form.Label> Verify Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Terms and conditions"
                                required
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
                <Link to="/Userpage">
                    <Button variant="primary" onClick={handleClose}>
                        Bidding?
                    </Button>
                </Link>
                <Link to="/sellerPage">
                    <Button variant="primary" onClick={handleClose}>
                        Selling?
                    </Button>
                </Link>
            </Modal>
        </div>
    );
};

export default Register;
