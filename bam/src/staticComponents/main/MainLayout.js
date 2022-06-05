import React from "react";
import styles from "./MainLayout.module.css";
import HeroSection from "../hero/HeroSection";
import HomePageCard from "../../features/cards/HomePageCard";
import NewListings from "../../features/cards/NewListings";

const MainLayout = () => {
    return (
        <section id="home">
            <section>
                <HeroSection />
            </section>
            <section className={styles.main}>
                <div className="container-fluid pl-0">
                    <div className="row">
                        <div className="col-9 ">
                            <div className={styles.title}>
                                <h2>Active Auctions</h2>
                            </div>
                            <hr />
                            <div className={styles.mainCards}>
                                <HomePageCard />
                            </div>
                        </div>
                        <div className=" col-3">
                            <div className={styles.title}>
                                <h2>New Listing</h2>
                            </div>
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
