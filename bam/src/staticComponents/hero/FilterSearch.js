import React from "react";
import styles from "./FilterSearch.module.css";

const FilterSearch = () => {
    return (
        <>
            <div className={styles.search}>
                <div className={styles.container}>
                    <label htmlFor="">Where?</label>
                    <input type="text" placeholder="Destination" />
                </div>
                <div className={styles.container}>
                    <label htmlFor="">Check-in</label>
                    <input type="date" />
                </div>
                <div className={styles.container}>
                    <label htmlFor="">Check-out</label>
                    <input type="date" />
                </div>
                <button>Search</button>
            </div>
        </>
    );
};

export default FilterSearch;
