import React from "react";
import styles from "./FooterLayout.module.css";
import { BiCopyright } from "react-icons/bi";

const FooterLayout = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerList}>
                <ul className={styles.footerLinks}>
                    <li>Contact us</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>About</li>
                </ul>
            </div>
            <div className={styles.copyright}>
                <small>
                    <BiCopyright />
                    2022, copyright raeven gonçalves{" "}
                </small>
            </div>
        </div>
    );
};

export default FooterLayout;
