export default function HotelHeader(props) {
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