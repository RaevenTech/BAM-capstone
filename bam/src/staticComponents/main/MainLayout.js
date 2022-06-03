import React from "react";
import styles from "./MainLayout.module.css";
import FooterLayout from "../footer/FooterLayout";
import HeroSection from "../hero/HeroSection";
import HomePageCard from "../../features/cards/HomePageCard";
import NewListings from "../../features/cards/NewListings";

const MainLayout = () => {
    return (
        <section id="home">
            <section className={styles.hero}>
                <HeroSection />
            </section>
            <section className={styles.main}>
                <div className="container-fluid pl-0">
                    <div className="row">
                        <div className="col-9 ">
                            <h2>Active Auctions</h2>
                            <hr />
                            <div className={styles.mainCards}>
                                <HomePageCard />
                            </div>
                        </div>
                        <div className=" col-3">
                            <h2>New listing</h2>
                            <hr />
                            <div className={styles.newList}>
                                <NewListings />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default MainLayout;
