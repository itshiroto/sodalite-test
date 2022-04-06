export default function hotelCover(props) {
    return (
        <div id="hotel-cover">
            {props.img.map((img, index) => <div key={index} className="hotel-img"><img src={img} alt="Hotel {index}"/></div>)}
        </div>
    )
}