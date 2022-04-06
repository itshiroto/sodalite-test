
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

function HotelReview({reviews}) {
    return (
        <div id="hotel-review">
            {reviews.map((val, idx) => <ReviewCard key={idx} {...val}/>)}
            <div id="review-more">
                <p>Read More</p>
            </div>
        </div>
    )
}

function HotelDesc(props) {
    return (
        <div id="hotel-desc">
            <div id="desc-para">
                <p>{props.desc}</p>
            </div>

            <ul id="desc-features">
                {props.features.map((feature, index) => (
                    <HotelDescFeatures key={index}>{feature}</HotelDescFeatures>
                ))}
            </ul>
        
            <HotelRecommendation 
                user={props.member.user}
                other={props.member.other}
            />
                    
        </div>
    )
}

export default function HotelMain({desc, features, member, reviews}) {
    return (
        <div id="hotel-main">
            <HotelDesc 
                desc={desc}
                features={features}
                member={member}
            />
            <HotelReview 
                reviews={reviews}
            />
        </div>
    )
}