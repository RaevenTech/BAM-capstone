import React from "react";
import styles from "./FilterSearch.module.css";

const FilterSearch = () => {
    return (
        <>
            <div className={styles.search}>
                <div className={styles.container}>
                    <label className={styles.searchlabel} htmlFor="">
                        Where?
                    </label>
                    <input type="text" placeholder="Destination" />
                </div>
                <div className={styles.container}>
                    <label className={styles.searchlabel} htmlFor="">
                        Check-in
                    </label>
                    <input type="date" />
                </div>
                <div className={styles.container}>
                    <label className={styles.searchlabel} htmlFor="">
                        Check-out
                    </label>
                    <input type="date" />
                </div>
            </div>
            <button className={styles.searchBtn}>Search</button>
        </>
    );
};

export default FilterSearch;
