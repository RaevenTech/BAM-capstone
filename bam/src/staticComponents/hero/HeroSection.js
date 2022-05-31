import React from "react";
import FilterSearch from "./FilterSearch";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <section id="hero">
            <div className={styles.background}>
                <img
                    src="https://wallpaperaccess.com/full/2456957.jpg"
                    alt="Gallery"
                />
            </div>
            <div className={styles.title}>
                <h1>Like it? Bid for it!</h1>
                <h3>Online holdiay auction</h3>
                <p>
                    Find your next vacation, weekend away or travel for
                    business.{" "}
                </p>
            </div>
            <FilterSearch />
        </section>
    );
};

export default HeroSection;
