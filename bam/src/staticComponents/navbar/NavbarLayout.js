import { GiBangingGavel } from "react-icons/gi";
import { Button, Nav, Navbar, Modal, Form } from "react-bootstrap";
import styles from "./NavbarLayout.module.css";
import React, { useState } from "react";

function NavbarLayout() {
    const [smShow, setSmShow] = useState(false);

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
                <Modal.Header closeButton>Login</Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
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
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default NavbarLayout;
