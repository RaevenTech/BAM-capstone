import React from "react";
import styles from "./HomePageCard.module.css";
import { HiUserGroup } from "react-icons/hi";

const HomePageCard = () => {
    const data = [
        {
            image: "https://static.euronews.com/articles/stories/06/16/33/58/808x454_cmsv2_9deaafbf-1267-5695-9bac-61f2dcd70626-6163358.jpg",
            title: "European adventure destination",
            location: "Sao Miguel Island, part of the Azores",
            MaxGuests: 4,
            rules: "No children under the age of 16 can suba dive without the license",
            description: "volcanic islands perfect for adventure seekers",
        },
        {
            image: "https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/i493aa34c3c1a8f30/version/1487431666/algarve-best-family-destinations-in-europe-copyright-nomad-soul-european-best-destinations.jpg",
            title: "Beautiful Beaches and Blue water",
            location: "Algarve,Portugal",
            MaxGuests: 4,
            rules: "Perfect for families or couples",
            description:
                "Welcome to one of the most wonderful regions of Portugal with a mild and sunny climate all year round!",
        },
        {
            image: "https://www.planetware.com/wpimages/2019/02/europe-top-places-to-visit-summer-dubrovnik-croatia.jpg",
            title: "Dubrovnik's old-world beauty",
            location: "Dubrovnik, Croatia",
            MaxGuests: 2,
            rules: "Perfect for families or couples",
            description:
                "Croatian gem is one of the most stunning cities on the Dalmatian Coast, and one of the best places to visit in Europe in summer",
        },
        {
            image: "https://www.planetware.com/wpimages/2019/02/europe-top-places-to-visit-summer-reykjavik-iceland.jpg",
            title: "Mother Nature's works of art",
            location: "Reykjavik, Iceland",
            maxGuests: 8,
            rules: "Perfect for families or couples even backpackers",
            description:
                "Colorful fields of greens and flowers, blue skies juxtaposed against the Blue Lagoon healing waters",
        },
    ];
    return (
        <section id="homeCard">
            {data.map((card, i) => {
                return (
                    <section className={styles.card}>
                        <div key={i} classname={styles.cardImage}>
                            <img src={card.image} alt={card.location} />
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.location}</p>
                        <div className={styles.guests}>
                            max
                            <HiUserGroup />
                            {card.maxGuests}
                        </div>
                        <div className={styles.description}>
                            <label
                                for="description"
                                type="text"
                                maxlength="250"
                            ></label>
                            <p>{card.description}</p>
                        </div>
                    </section>
                );
            })}
        </section>
    );
};

export default HomePageCard;
