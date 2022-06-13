import React from "react";
import { Link } from "react-router-dom";
import styles from "./SellerPage.module.css";
import data from "../../../data/data.json";
import NavbarUser from "../../user/userNav/NavbarUser";
import FooterLayout from "../../../homeComponents/footer/FooterLayout";
import SalesHistory from "../history/SalesHistory";
import RegisterListing from "../../../features/forms/RegisterListing";

const SellerPage = () => {
    return (
        <div className={styles.main}>
            <NavbarUser />
            <div className={styles.dashboard}>
                <h2 className={styles.header}> Auctioneer Dashboard </h2>
                <div>
                    <ul className={styles.ul}>
                        <Link className={styles.li_link} to="">
                            <li className={styles.li}>Home</li>
                        </Link>
                        <Link className={styles.li_link} to="">
                            <li className={styles.li}>Log out</li>
                        </Link>
                        <li className={styles.li_btn}>
                            <RegisterListing />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-fluid">
                <h4 className={styles.active_auction_list}>Active Auctions</h4>
                <div className={styles.auction_body}>
                    {data.map((auction, i) => {
                        return (
                            <div key={[i]} className={styles.auctions}>
                                <img
                                    className={styles.auction_image}
                                    src={auction.image}
                                    alt=""
                                />
                                <h3 className={styles.auction_title}>Title</h3>
                                <p className={styles.price}>
                                    Price €{auction.price}
                                </p>
                                <div className={styles.auction_info}>
                                    <ul className={styles.ul}>
                                        <li className={styles.highest_bid}>
                                            Bid:€ {auction.currentBid}
                                        </li>
                                        <li className={styles.highest_bid}>
                                            Closing: {auction.closingDate}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <SalesHistory />
            </div>
            ;
            <FooterLayout />
        </div>
    );
};

export default SellerPage;
