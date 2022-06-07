import React from "react";
import styles from "./NavbarUser.module.css";
import { FaUserCircle } from "react-icons/fa";

const NavbarUser = () => {
    return (
        <>
            <div className={styles.navbar}>
                <img src="" alt="logo" />
                <div className={styles.nav_links}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>Home</li>
                        <li>Log Out</li>
                    </ul>
                </div>
                <div className={styles.userId}>
                    User Name <FaUserCircle />
                </div>
            </div>
        </>
    );
};

export default NavbarUser;
