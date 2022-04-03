import LoremIpsum, {loremIpsum} from 'react-lorem-ipsum';
import './content.css';

const coverImage = {
    img1: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67802133-8b871edb53e7a06227a3d92a4ad786be.jpeg",
    img2: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67802133-698d22690dd8f767f9b3ccc8e54e1229.jpeg",
    img3: "https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67802133-20f633a5d471d6be259a80afc4e9e77e.jpeg",
}

function HotelCover()  {
    return (
        <div id="hotel-cover">
            <div class="hotel-img"><img src={coverImage.img1} alt="Hotel 1"/></div>
            <div class="hotel-img"><img src={coverImage.img2} alt="Hotel 1"/></div>
            <div class="hotel-img"><img src={coverImage.img3} alt="Hotel 1"/></div>
        </div>
    )
}

function HotelHeader(props) {
    return (
        <div id="hotel-header">
            <div id="hotel-title">
                <h2>{props.name}</h2>
                <a href="#">{props.location}</a>
            </div>
            <div id="hotel-rating">
                <p id="hotel-ratingval">{props.rating}</p>
                <p id="hotel-votes">{props.votes} votes</p>
            </div>
        </div>
    )
}

function HotelDescFeatures(props) {
    return (
        <li className="features-item">
            {props.children}
        </li>
    )
}

function HotelRecommendation(props) {
    return (
        <div id="desc-recom">
            <div id="recom-para">
                <p>{props.user.name} and {props.other.length} other friends recommended this hotel</p>
            </div>
            <div id="recom-img">
                <img src={props.user.img} alt="User 1"/>
                {props.other.map((usr, index) => (
                    <img key={index} src={usr.img} alt="User"/>
                ))}
            </div>
        </div>
    )
}

function HotelDesc() {
    const features = [
        "Free Wifi",
        "Free Parking",
        "Free Breakfast",
        "Close to the beach",
        "Close to the city",
        "Beautiful view",
        "Friendly staff",
        "Affordable",
    ];
    const member = {
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
    }
    return (
        <div id="hotel-desc">
            <div id="desc-para">
                <LoremIpsum p={2} avgSentencesPerParagraph={4}/>
            </div>

            <ul id="desc-features">
                {features.map((feature, index) => (
                    <HotelDescFeatures key={index}>{feature}</HotelDescFeatures>
                ))}
            </ul>
        
            <HotelRecommendation 
                user={member.user}
                other={member.other}
            />
                    
        </div>
    )
}

function ReviewCard(props) {
    return (
        <div className="review-card">
            <div className="review-desc">
                <p className="review-text">
                    {props.review}
                </p>
            </div>
            <div className="review-user">
                <img className="user-img" src={props.img} alt="User Profile"/>
                <div className="user-desc">
                    <p className="user-name">{props.name}</p>
                    <p className="user-date">{props.date}</p>
                </div>
                <p className="user-rating">{props.rating}</p>
            </div>
        </div>
    )
}

function HotelReview() {
    const userExample = [
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
    ];
    return (
        <div id="hotel-review">
            <ReviewCard {...userExample[0]}/>
            <ReviewCard {...userExample[1]}/>
            <div id="review-more">
                <p>Read More</p>
            </div>
        </div>
    )
}

function HotelCTA() {
    return (
        <div id="hotel-cta">
            <p id="cta-text">Book yourself a room now!</p>
            <button id="cta-btn">Book Now!</button>
        </div>
    )
}

function HotelMain() {
    return (
        <div id="hotel-main">
            <HotelDesc />
            <HotelReview />
        </div>
    )
}

export default function Content() {
    const hotel = {
        name: "Grand Parama Hotel",
        location: "Berau, East Kalimantan",
        rating: "4.5",
        votes: "1.5k"
    }
    return (
        <div id="main-content">
            <HotelCover />
            <HotelHeader 
                {...hotel}
            /> 
            <HotelMain />
            <HotelCTA />
        </div>
    )
}