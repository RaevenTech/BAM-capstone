import { GiBangingGavel } from "react-icons/gi";
import { Button, Nav, Navbar, Modal, Form } from "react-bootstrap";
import styles from "./NavbarLayout.module.css";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/Firebase";

function NavbarLayout() {
    const [smShow, setSmShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        addDoc(collection(db, "user", "login"), {
            email: email,
            password: password,
        })
            .then(() => {
                console.log("logged in");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className={styles.container}>
            <Navbar className={styles.navbarMain} variant="light" expand="md">
                <Navbar.Brand className={styles.logo} href="#home">
                    <GiBangingGavel />
                    BAM!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto"></Nav>
                    <Button onClick={() => setSmShow(true)} className="me-2">
                        Login
                    </Button>
                </Navbar.Collapse>
            </Navbar>
            <hr />
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header className={styles.login} closeButton>
                    Login
                </Modal.Header>
                <Modal.Body className={styles.login_body}>
                    <Form>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label className="mb-1">
                                Email address
                            </Form.Label>
                            <Form.Control
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-1"
                            controlId="formBasicPassword"
                        >
                            <Form.Label className="mb-1">Password</Form.Label>
                            <Form.Control
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                type="password"
                                placeholder=""
                            />
                        </Form.Group>
                        <button className={styles.login_submit} onClick={login}>
                            Go
                        </button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default NavbarLayout;
