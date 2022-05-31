import React from "react";
import FilterSearch from "./FilterSearch";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <section id="hero">
            <div className={styles.background}>
                <img
                    src="https://thumbs.dreamstime.com/b/collage-travel-photos-different-countries-collage-international-landmarks-popular-travel-destinations-photos-108973833.jpg"
                    alt="Gallery"
                />
            </div>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>Like it? Bid for it!</h1>
                    <p>
                        Find your next vacation destination. Look fora weekend
                        away or maybe just for business.{" "}
                    </p>
                </div>
                <FilterSearch />
            </div>
        </section>
    );
};

export default HeroSection;
