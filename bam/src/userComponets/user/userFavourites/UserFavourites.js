import React from "react";
import styles from "./UserFavourites.module.css";
import data from "../../../data/data.json";

const UserFavourites = () => {
    return (
        <div className="conatainer_fluid">
            <div className={styles.fav_title}>
                <h3>watch List</h3>
            </div>
            <div className={styles.watch_list}>
                {data.map((favourite, i) => {
                    return (
                        <div key={[i]} className={styles.fav_list}>
                            <div className={styles.fav_image}>
                                {" "}
                                <img
                                    className={styles.fav_img}
                                    src={favourite.image}
                                    alt=""
                                />
                            </div>
                            <h3 className={styles.fav_list_title}>
                                {favourite.location}
                            </h3>
                            <div className={styles.fav_price_addBid}>
                                <p className={styles.fav_price}>
                                    {data.currentBid}
                                </p>
                                <button className={styles.fav_addBid}>
                                    Bid
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UserFavourites;
