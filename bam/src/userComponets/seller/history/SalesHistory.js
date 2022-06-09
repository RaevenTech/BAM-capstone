import React from "react";
import styles from "./SalesHistory.module.css";
import data from "../../../data/data.json";

const SalesHistory = () => {
    return (
        <>
            <h4 className={styles.history_title}>Auction History</h4>
            <div className={styles.auction_history}>
                {data.map((item, i) => {
                    return (
                        <div key={[i]} className={styles.history_list}>
                            <div className={styles.list_item}>
                                <h4>{item.title}</h4>
                                <p>{item.location}</p>
                                <div>{item.closingBid}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SalesHistory;
