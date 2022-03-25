import './content.css';

const coverImage = {
    img1: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67802133-8b871edb53e7a06227a3d92a4ad786be.jpeg",
    img2: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67802133-698d22690dd8f767f9b3ccc8e54e1229.jpeg",
    img3: "https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67802133-20f633a5d471d6be259a80afc4e9e77e.jpeg",
}

function HotelCover()  {
    return (
        <div id="hotel-cover">
            <img src={coverImage.img1} alt="Hotel 1"/>
            <img src={coverImage.img2} alt="Hotel 1"/>
            <img src={coverImage.img3} alt="Hotel 1"/>
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

export default function Content() {
    const hotel = {
        name: "Arasatu Villas & Sanctuary",
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
        </div>
    )
}