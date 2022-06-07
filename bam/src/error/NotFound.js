import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <Container className={styles.container}>
            <Row className="justify-content-center mt-4">
                <Col className="text-center">
                    <h2>404 - Page not found</h2>
                    <div>Click here to go back</div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
