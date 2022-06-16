import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import styles from "./Register.module.css";
//import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { db } from "../../utils/Firebase";
import { doc, setDoc } from "firebase/firestore";
//import { postAdded } from "../../slices/postSlice";

const Register = () => {
    //const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {
        const userId = nanoid();
        console.log("sub-func");
        // submit data
        setDoc(doc(db, "users"), {
            id: userId,
            name: name,
            surname: surname,
            email: email,
            password: password,
        })
            .then(() => {
                console.log("data submitted");
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
                                required
                            />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                value={surname}
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => {
                                    setSurname(e.target.value);
                                }}
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
                                value={email}
                                type="email"
                                placeholder="Enter valid email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                required
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
                    <input
                        variant="primary"
                        value="Bid "
                        onClick={handleSubmit}
                    />
                </Link>
                <Link to="/sellerPage">
                    <input
                        variant="primary"
                        value="seller"
                        onClick={handleSubmit}
                    />
                </Link>
            </Modal>
        </div>
    );
};

export default Register;
