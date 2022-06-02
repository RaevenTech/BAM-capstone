import React from "react";
import styles from "./HomePageCard.module.css";

const HomePageCard = () => {
    const data = [
        {
            image: "https://static.euronews.com/articles/stories/06/16/33/58/808x454_cmsv2_9deaafbf-1267-5695-9bac-61f2dcd70626-6163358.jpg",
            title: "European adventure destination",
            location: "Sao Miguel Island, part of the Azores",
            maxGuests: 0,
            currentBid: 15,
            description: "volcanic islands perfect for adventure seekers",
        },
        {
            image: "https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/i493aa34c3c1a8f30/version/1487431666/algarve-best-family-destinations-in-europe-copyright-nomad-soul-european-best-destinations.jpg",
            title: "Beautiful Beaches and Blue water",
            location: "Algarve,Portugal",
            maxGuests: 0,
            currentBid: 111,
            description:
                "Welcome to one of the most wonderful regions of Portugal with a mild and sunny climate all year round!",
        },
        {
            image: "https://www.planetware.com/wpimages/2019/02/europe-top-places-to-visit-summer-dubrovnik-croatia.jpg",
            title: "Dubrovnik's old-world beauty",
            location: "Dubrovnik, Croatia",
            maxGuests: 0,
            currentBid: 67,
            description:
                "Croatian gem is one of the most stunning cities on the Dalmatian Coast, and one of the best places to visit in Europe in summer",
        },
        {
            image: "https://www.planetware.com/wpimages/2019/02/europe-top-places-to-visit-summer-reykjavik-iceland.jpg",
            title: "Mother Nature's works of art",
            location: "Reykjavik, Iceland",
            maxGuests: 0,
            currentBid: 35,
            description:
                "Colorful fields of greens and flowers, blue skies juxtaposed against the Blue Lagoon healing waters",
        },
    ];
    return (
        <section id="homeCard">
            {data.map((card, i) => {
                return (
                    <section key={[i]} className={styles.card}>
                        <div className={styles.cardImage}>
                            <img src={card.image} alt={card.location} />
                            <h3>{card.title}</h3>
                        </div>
                        <p className={styles.location}>
                            <small>{card.location}</small>
                        </p>
                        <div className={styles.description}>
                            <p>{card.description}</p>
                        </div>
                        <div className={styles.guestsTimer}>
                            <button className={styles.danger_btn}>
                                Add your bid - €{card.currentBid}.00
                            </button>
                            <div className={styles.timer}>
                                Closing: 00:00:00
                            </div>
                        </div>
                    </section>
                );
            })}
        </section>
    );
};

export default HomePageCard;
