import React from "react";
import styles from "./NavbarUser.module.css";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../../assets/bam-png.png";

const NavbarUser = () => {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img className={styles.img} src={logo} alt="logo" />
                </div>

                <div className={styles.user_profile}>
                    <div className={styles.userId}>
                        User Name{" "}
                        <span className={styles.user_icon}>
                            <FaUserCircle />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarUser;
