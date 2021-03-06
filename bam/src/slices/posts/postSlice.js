import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        image: "https://static.euronews.com/articles/stories/06/16/33/58/808x454_cmsv2_9deaafbf-1267-5695-9bac-61f2dcd70626-6163358.jpg",
        title: "European adventure destination",
        location: "Sao Miguel Island, part of the Azores",
        maxGuests: 0,
        avalibility: {
            startDate: "2019-12-01",
            endDate: "2019-12-31",
        },
        price: 10,
        currentBid: 15,
        closingBid: 20,
        closingDate: "2019-12-31",
        description: "volcanic islands perfect for adventure seekers",
        url: "https://www.euronews.com/story/2019/12/01/volcanic-islands-perfect-adventure-seekers-sao-miguel-island-azores-europe-120119",
    },
    {
        id: "2",
        image: "https://image.jimcdn.com/app/cms/image/transf/dimension=1190x10000:format=jpg/path/sa6549607c78f5c11/image/i493aa34c3c1a8f30/version/1487431666/algarve-best-family-destinations-in-europe-copyright-nomad-soul-european-best-destinations.jpg",
        title: "Beautiful Beaches and Blue water",
        location: "Algarve,Portugal",
        maxGuests: 0,
        avalibility: {
            startDate: "2019-12-01",
            endDate: "2019-12-31",
        },
        price: 15,
        currentBid: 111,
        closingBid: 20,
        closingDate: "2019-12-31",
        description:
            "Welcome to one of the most wonderful regions of Portugal with a mild and sunny climate all year round!",
        url: "https://www.nomadspain.com/beaches/algarve-beaches-in-portugal-best-family-destinations-in-europe-copyright-nomad-soul-european-best-destinations.html",
    },
    {
        id: "3",
        image: "https://www.planetware.com/wpimages/2019/02/europe-top-places-to-visit-summer-dubrovnik-croatia.jpg",
        title: "Dubrovnik's old-world beauty",
        location: "Dubrovnik, Croatia",
        maxGuests: 0,
        avalibility: {
            startDate: "2019-12-01",
            endDate: "2019-12-31",
        },
        price: 25,
        currentBid: 67,
        closingBid: 20,
        closingDate: "2019-12-31",
        description:
            "Croatian gem is one of the most stunning cities on the Dalmatian Coast",
        url: "https://www.planetware.com/wpimages/2019/02/europe-top-places-to-visit-summer-dubrovnik-croatia.jpg",
    },
    {
        id: "4",
        image: "https://static.trip101.com/paragraph_media/pictures/001/218/300/large/9521fe08-be0d-4f30-9fd3-02487e16f904.jpg?1528771783",
        title: "Relax in the mountains",
        location: "french, alpes",
        maxGuests: 0,
        avalibility: {
            startDate: "2019-12-01",
            endDate: "2019-12-31",
        },
        price: 20,
        currentBid: 35,
        closingBid: 20,
        closingDate: "2019-12-31",
        description:
            "where nature meets your soul, explore the wonders of the forest",
        url: "https://www.tripadvisor.com/Attraction_Review-g187870-d125909-Reviews-Mont_Blanc_Mountain_Resort-Mont_Blanc_France.html",
    },
    {
        id: "5",
        image: "https://news.airbnb.com/wp-content/uploads/sites/4/2018/08/10-airship-002-min.jpg",
        title: "Scotland HighLands, United Kingdom",
        location: "Dubrovnik, Croatia",
        maxGuests: 0,
        avalibility: {
            startDate: "2019-12-01",
            endDate: "2019-12-31",
        },
        price: 40,
        currentBid: 67,
        closingBid: 20,
        closingDate: "2019-12-31",
        description: "Truly unique environment in which to relax and unwind",
        url: "https://www.airbnb.com/rooms/14087",
    },
    {
        id: "6",
        image: "https://www.planetware.com/wpimages/2019/02/europe-top-places-to-visit-summer-reykjavik-iceland.jpg",
        title: "Mother Nature's works of art",
        location: "Reykjavik, Iceland",
        maxGuests: 0,
        avalibility: {
            startDate: "2019-12-01",
            endDate: "2019-12-31",
        },
        price: 67,
        currentBid: 35,
        closingBid: 20,
        closingDate: "2019-12-31",
        description:
            "Colorful fields of greens and flowers, blue skies juxtaposed against the Blue Lagoon healing waters",
        url: "https://www.tripadvisor.com/Attraction_Review-g187870-d125909-Reviews-Mont_Blanc_Mountain_Resort-Mont_Blanc_France.html",
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, location, price, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        location,
                        price,
                        userId,
                        avalibility: {
                            from: "",
                            to: "",
                        },
                    },
                };
            },
        },
    },
});

export const selectAllPosts = (state) => state.posts;
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
