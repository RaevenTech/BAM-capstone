import React from "react";
import styles from "./UserPage.module.css";
import NavbarUser from "../userNav/NavbarUser";
import FooterLayout from "../../../homeComponents/footer/FooterLayout";

const UserPage = () => {
    return (
        <>
            <header className={styles.header}>
                <NavbarUser />
            </header>

            <main className={styles.main}>
                <div className={styles.active_bid}></div>
                <div className={styles.watch_list}></div>
            </main>
            <footer>
                <FooterLayout />
            </footer>
        </>
    );
};

export default UserPage;
