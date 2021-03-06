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
                "Croatian gem is one of the most stunning cities on the Dalmatian Coast",
        },
        {
            image: "https://static.trip101.com/paragraph_media/pictures/001/218/300/large/9521fe08-be0d-4f30-9fd3-02487e16f904.jpg?1528771783",
            title: "Relax in the mountains",
            location: "french, alpes",
            maxGuests: 0,
            currentBid: 35,
            description:
                "where nature meets your soul, explore the wonders of the forest",
        },
        {
            image: "https://news.airbnb.com/wp-content/uploads/sites/4/2018/08/10-airship-002-min.jpg",
            title: "Scotland HighLands, United Kingdom",
            location: "Dubrovnik, Croatia",
            maxGuests: 0,
            currentBid: 67,
            description:
                "Yruly unique environment in which to relax and unwind",
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
        <div id="homeCard" className={styles.card}>
            {data.map((card, i) => (
                <div
                    className={`flex-container mb-2 
                    ${i % 2 === 0 ? "row" : "works"}
                    `}
                    key={[i]}
                >
                    <div className="col-5">
                        <img
                            className={styles.image}
                            src={card.image}
                            alt={card.location}
                        />
                    </div>
                    <div className="col-7">
                        <div className={styles.content}>
                            <h3 className={styles.card_title}>{card.title}</h3>
                            <p className={styles.location}>{card.location}</p>
                            <div className={styles.final_bids}>
                                <button className={styles.danger_btn}>
                                    Currnent Bid: ??? {card.currentBid}.00
                                </button>
                                <div className={styles.timer}>
                                    <small>
                                        Bid close:{" "}
                                        <span className={styles.counter}>
                                            00:00:00
                                        </span>
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomePageCard;
