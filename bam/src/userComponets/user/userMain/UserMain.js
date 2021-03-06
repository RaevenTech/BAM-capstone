import React from "react";
import styles from "./UserMain.module.css";
import data from "../../../data/data.json";
import BidCounter from "../../../features/counter/BidCounter";

const UserMain = () => {
    return (
        <div className={styles.body}>
            <div className={styles.dashboard}>
                <h2 className={styles.header}> Your Dashboard </h2>
                <div>
                    <ul className={styles.ul}>
                        <li className={styles.li}>Home</li>
                        <li className={styles.li}>Log out</li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid">
                <div className={styles.active_bid}>
                    {data.map((card, i) => {
                        return (
                            <div key={[i]} className={styles.bid_card}>
                                <img
                                    className={styles.bid_image}
                                    src={card.image}
                                    alt=""
                                />
                                <h3 className={styles.bid_title}>
                                    {card.title}
                                </h3>
                                <p className={styles.bid_location}>
                                    {card.location}
                                </p>
                                <BidCounter />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default UserMain;
