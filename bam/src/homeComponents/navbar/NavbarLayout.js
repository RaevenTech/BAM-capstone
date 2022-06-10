import { GiBangingGavel } from "react-icons/gi";
import { Button, Nav, Navbar, Modal, Form } from "react-bootstrap";
import styles from "./NavbarLayout.module.css";
import React, { useState } from "react";

function NavbarLayout() {
    const [smShow, setSmShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {}

    return (
        <div className={styles.container}>
            <Navbar className={styles.navbarMain} variant="light" expand="md">
                <Navbar.Brand className={styles.logo} href="#home">
                    <GiBangingGavel />
                    BAM!
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {/*<Nav.Link href="#home"></Nav.Link>*/}
                        {/*<Nav.Link href="#link"></Nav.Link>*/}
                    </Nav>
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
                                onChange={(email) => {
                                    setEmail(email);
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
                                onChange={(password) => {
                                    setPassword(password);
                                }}
                                type="password"
                                placeholder="Password"
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
