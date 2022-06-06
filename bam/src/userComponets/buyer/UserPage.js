import React from "react";
import styles from "./UserPage.module.css";
import NavbarUser from "./userNav/NavbarUser";

const UserPage = () => {
    return (
        <div className={styles.container}>
            <NavbarUser />
        </div>
    );
};

export default UserPage;
