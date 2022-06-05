import React from "react";
import styles from "./FilterSearch.module.css";

const FilterSearch = () => {
    return (
        <>
            <div className={styles.search}>
                <div className={styles.container}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Destination"
                    />
                </div>
                <div className={styles.container}>
                    <input className={styles.input} type="date" />
                </div>
                <div className={styles.container}>
                    <input className={styles.input} type="date" />
                </div>
            </div>
            <button className={styles.searchBtn}>Search</button>
        </>
    );
};

export default FilterSearch;
