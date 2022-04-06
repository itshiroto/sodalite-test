import {loremIpsum} from 'react-lorem-ipsum';

import {HotelCover, HotelTitle, HotelMain, HotelCTA} from './hotel-content';

import './content.css';

const hotel = {
    name: "Grand Parama Hotel",
    location: "Berau, East Kalimantan",
    rating: "4.5",
    votes: "1.5k",
    cover: [
        "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67802133-8b871edb53e7a06227a3d92a4ad786be.jpeg",
        "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67802133-698d22690dd8f767f9b3ccc8e54e1229.jpeg",
        "https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67802133-20f633a5d471d6be259a80afc4e9e77e.jpeg",
    ],
    desc: loremIpsum({avgSentencesPerParagraph: 5}), 
    features: [
        "Free Wifi",
        "Free Parking",
        "Free Breakfast",
        "Close to the beach",
        "Close to the city",
        "Beautiful view",
        "Friendly staff",
        "Affordable",
    ],
    member: {
        user: {
            name: "Rivo",
            img: "https://avatars.githubusercontent.com/u/13134915?v=4"
        },
        other: [
            {
                name: "Agus",
                img: "https://i.pravatar.cc/300?img=20"
            },
            {
                name: "Agus",
                img: "https://i.pravatar.cc/300?img=48"
            },
            {
                name: "Agus",
                img: "https://i.pravatar.cc/300?img=51"
            },
        ]
    },
    review: [
        {
            name: "Agus Sutanto",
            img: "https://i.pravatar.cc/300?img=53",
            date: "28 May 2019",
            rating: "4.5",
            review: loremIpsum({avgSentencesPerParagraph: 3}),
        },
        {
            name: "Bambang Surya",
            img: "https://i.pravatar.cc/300?img=68",
            date: "12 March 2019",
            rating: "4.2",
            review: loremIpsum({avgSentencesPerParagraph: 2}),
        },
    ]
}



export default function Content() {

    return (
        <div id="main-content">
            <HotelCover img={hotel.cover} />
            <HotelTitle 
                name={hotel.name}
                location={hotel.location}
                rating={hotel.rating}
                votes={hotel.votes}
            /> 
            <HotelMain 
                desc={hotel.desc}
                features={hotel.features}
                member={hotel.member}
                reviews={hotel.review}
            />
            <HotelCTA />
        </div>
    )
}