import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "./ResgisterListing.module.css";

const RegisterListing = () => {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow}>Add listing</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Register to sell at auction</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                value={title}
                                type="text"
                                placeholder="* Apartment with amazing sea views"
                                onChange={(title) => {
                                    setTitle(title);
                                }}
                                required
                            />
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="* NorthPole, Artic circle"
                                required
                            />
                            <Form.Label>Avalibility</Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="* From"
                                required
                            />
                            <Form.Control
                                type="text"
                                placeholder="* To"
                                required
                            />
                            <Form.Label>Starting Price in € </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="* 99"
                                required
                            />
                            <Form.Label>Url link</Form.Label>
                            <Form.Control
                                type="url"
                                placeholder="* url: https//web-address"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload image</Form.Label>
                            <Form.Control type="file" accept="image/*" />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label=" * Agree and have read the Terms and conditions"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        className={styles.cancel_btn}
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Link to="/sellerPage">
                        <Button
                            className={styles.submit_btn}
                            onClick={handleClose}
                        >
                            Submit
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RegisterListing;
