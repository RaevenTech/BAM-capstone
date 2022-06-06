import React from "react";
import FilterSearch from "./FilterSearch";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.background}>
                <img
                    className={styles.image}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/4378px-World_map_blank_without_borders.svg.png"
                    alt="Gallery"
                />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1 className={styles.title}>Like it? Bid for it!</h1>
                    <p className={styles.subtitle}>
                        Find your next vacation destination. Quick weekend away
                        or maybe just for business?{" "}
                    </p>
                </div>
                <FilterSearch />
            </div>
        </section>
    );
};

export default HeroSection;
