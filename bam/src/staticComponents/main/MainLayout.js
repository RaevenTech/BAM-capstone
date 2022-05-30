import React from "react";
import styles from "./MainLayout.module.css";
//import FooterLayout from "../footer/FooterLayout";
import NavbarLayout from "../navbar/NavbarLayout";

const MainLayout = () => {
    return (
        <section>
            <header className="fluid">
                <div className={styles.navbar}>
                    <NavbarLayout />
                </div>
            </header>
            <footer>
                <div>{/*<FooterLayout />*/}</div>
            </footer>
        </section>
    );
};

export default MainLayout;
