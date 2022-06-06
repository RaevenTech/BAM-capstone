import React from "react";
import styles from "./MainLayout.module.css";
import HeroSection from "../hero/HeroSection";
import NavbarLayout from "../navbar/NavbarLayout";
import FooterLayout from "../footer/FooterLayout";
import ModalLayout from "../../features/modal/ModalLayout";
import HomePageCard from "../../features/cards/homepage/HomePageCard";
import NewListings from "../../features/cards/homepage/NewListings";

const MainLayout = () => {
    return (
        <section id="home">
            <NavbarLayout />
            <section>
                <HeroSection />
            </section>
            <ModalLayout />
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
            <FooterLayout />
        </section>
    );
};

export default MainLayout;
