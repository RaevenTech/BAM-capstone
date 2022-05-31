import React from "react";
import styles from "./MainLayout.module.css";
import FooterLayout from "../footer/FooterLayout";
import NavbarLayout from "../navbar/NavbarLayout";
import HeroSection from "../hero/HeroSection";

const MainLayout = () => {
    return (
        <section>
            <header className="fluid">
                <div className={styles.navbar}>
                    <NavbarLayout />
                </div>
            </header>
            <HeroSection />
            <footer>
                <div>
                    <FooterLayout />
                </div>
            </footer>
        </section>
    );
};

export default MainLayout;
