import React from "react";
import styles from "./SellerPage.module.css";
import data from "../../data/data.json";
import NavbarUser from "../user/userNav/NavbarUser";
import FooterLayout from "../../homeComponents/footer/FooterLayout";

const SellerPage = () => {
    return (
        <>
            <NavbarUser />
            <div className={styles.dashboard}>
                <h2 className={styles.header}> Your Dashboard </h2>
                <div>
                    <ul className={styles.ul}>
                        <li className={styles.li}>Home</li>
                        <li className={styles.li}>Log out</li>
                    </ul>
                </div>
            </div>
            <div className={styles.seller_main}></div>;
            <FooterLayout />
        </>
    );
};

export default SellerPage;
