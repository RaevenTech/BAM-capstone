import React from "react";
import { GiBangingGavel } from "react-icons/gi";

import {
    NavDropdown,
    Nav,
    Navbar,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import styles from "./NavbarLayout.module.css";

function NavbarLayout() {
    return (
        <div className={styles.container}>
            <Navbar className={styles.navbarMain} variant="dark" expand="md">
                <Navbar.Brand className={styles.logo} href="#home">
                    <GiBangingGavel />
                    BAM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {/*<Nav.Link href="#home"></Nav.Link>*/}
                        {/*<Nav.Link href="#link"></Nav.Link>*/}
                        <NavDropdown
                            title="Get Started"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Register
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Register to bid
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Register for auction
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Login
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl
                            id="search-area"
                            type="text"
                            placeholder="Destination"
                            className="mr-sm-2"
                        />
                        <Button
                            variant="outline-success"
                            className={styles.searchIcon}
                        >
                            Find
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarLayout;
