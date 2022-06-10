import React from "react";
import styles from "./UserPage.module.css";
import NavbarUser from "../userNav/NavbarUser";
import FooterLayout from "../../../homeComponents/footer/FooterLayout";
import UserMain from "../userMain/UserMain";
import UserFavourites from "../userFavourites/UserFavourites";

const UserPage = () => {
    return (
        <>
            <header className={styles.header}>
                <NavbarUser />
            </header>

            <main className={styles.main}>
                <div className={styles.active_bid}>
                    <UserMain />
                </div>
                <div className={styles.watch_list}>
                    <UserFavourites />
                </div>
            </main>
            <footer>
                <FooterLayout />
            </footer>
        </>
    );
};

export default UserPage;
