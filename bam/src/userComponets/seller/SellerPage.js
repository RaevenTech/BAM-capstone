import React from "react";
import styles from "./SellerPage.module.css";
import data from "../../data/data.json";
import NavbarUser from "../user/userNav/NavbarUser";
import FooterLayout from "../../homeComponents/footer/FooterLayout";

const SellerPage = () => {
    return (
        <div className={styles.main}>
            <NavbarUser />
            <div className={styles.dashboard}>
                <h2 className={styles.header}> Auction Dashboard </h2>
                <div>
                    <ul className={styles.ul}>
                        <li className={styles.li}>Home</li>
                        <li className={styles.li}>Log out</li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <h4 className={styles.active_auction_list}>Active Auctions</h4>
                <div className={styles.auction_body}>
                    {data.map((auction) => {
                        return (
                            <div className={styles.auctions}>
                                <img
                                    className={styles.auction_image}
                                    src={auction.image}
                                    alt=""
                                />
                                <h3 className={styles.auction_title}>Title</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
            ;
            <FooterLayout />
        </div>
    );
};

export default SellerPage;
