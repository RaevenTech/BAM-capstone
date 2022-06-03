import React from "react";
import { GiBangingGavel } from "react-icons/gi";
import { Button, Nav, Navbar } from "react-bootstrap";
import styles from "./NavbarLayout.module.css";

function NavbarLayout() {
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
                        <Button>Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr />
        </div>
    );
}

export default NavbarLayout;
