import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import "react-phone-number-input/style.css";
import styles from "./Register.module.css";
//import { useDispatch } from "react-redux";;
//import { postAdded } from "../../slices/postSlice";

const Register = () => {
    //const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => setShow(false);
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
                    <Form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                value={name}
                                type="text"
                                placeholder=" First Name"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                value={surname}
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => {
                                    setSurname(e.target.value);
                                }}
                            />
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Phone number"
                            />

                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                value={email}
                                type="email"
                                placeholder="Enter valid email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                value={password}
                                type="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Terms and conditions"
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
                    <input
                        className={styles.login_submit_bid}
                        value="Bid"
                        type="submit"
                    />
                </Link>
                <Link to="/sellerPage">
                    <input
                        className={styles.login_submit_sell}
                        value="post"
                        type="submit"
                    />
                </Link>
            </Modal>
        </div>
    );
};

export default Register;
