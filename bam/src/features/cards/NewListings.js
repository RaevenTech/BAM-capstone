import React from "react";
import { Badge } from "react-bootstrap";
import styles from "./NewListings.module.css";

const NewListings = () => {
    const data = [
        {
            image: "https://www.mensjournal.com/wp-content/uploads/2021/01/MeadowlarkTreehouse.jpg?quality=40&strip=all",
            location: "Montana,USA",
            currentbid: 50,
        },
        {
            image: "https://media.cntraveler.com/photos/5e18e330ac1cea00092e91d2/master/pass/airbnb-beach-dominican-6939168.jpeg",
            location: "Bavaro, Dominican Republic",
            currentbid: 20,
        },
        {
            image: "https://a0.muscache.com/im/pictures/c5fce685-fff6-4c14-901a-e35a89353a6e.jpg?im_w=720",
            location: "Camps Bay Beach, Cape Town",
            currentbid: 50,
        },
        {
            image: "https://a0.muscache.com/im/pictures/d500cce2-6ff0-445f-bd29-1fc5f974c684.jpg?im_w=720",
            location: "Faro,Portugal",
            currentbid: 50,
        },
        {
            image: "https://wander-lush.org/wp-content/uploads/2021/01/Best-Airbnbs-in-Italy-Chapel-Venice.jpg",
            location: "Venice, Italy",
            currentbid: 50,
        },
    ];

    return (
        <section id="new_Listing">
            {data.map((card, i) => {
                return (
                    <div key={[i]} className={styles.card}>
                        <img
                            className={styles.cardImage}
                            src={card.image}
                            alt="treehouse"
                        />
                        <h4 className={styles.title}>{card.location}</h4>
                        <Badge className={styles.badge} variant="warning">
                            €{card.currentbid}
                        </Badge>
                        <div className={styles.new_list_btns}>
                            <button className={styles.bid_btn}> Add Bid</button>
                            <button className={styles.fav_btn}>Watch</button>
                        </div>
                    </div>
                );
            })}
            ;
        </section>
    );
};

export default NewListings;
