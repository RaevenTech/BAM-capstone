import React from "react";
import styles from "./MainLayout.module.css";
import FooterLayout from "../footer/FooterLayout";
import NavbarLayout from "../navbar/NavbarLayout";
import HeroSection from "../hero/HeroSection";
import HomePageCard from "../../features/cards/HomePageCard";
import NewListings from "../../features/cards/NewListings";

const MainLayout = () => {
    return (
        <section id="home">
            <header className="fluid">
                <div className={styles.navbar}>
                    <NavbarLayout />
                </div>
            </header>
            <section className={styles.hero}>
                <HeroSection />
            </section>
            <section className={styles.main}>
                <div className="container-fluid pl-0">
                    <div className="row">
                        <div className="col-8">
                            <h2>Active Auctions</h2>
                            <hr />
                            <div className={styles.mainCards}>
                                <HomePageCard />
                            </div>
                        </div>
                        <div className=" col-4">
                            <h2>New listing</h2>
                            <hr />
                            <div className={styles.newList}>
                                <NewListings />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div>
                    <FooterLayout />
                </div>
            </footer>
        </section>
    );
};

export default MainLayout;
