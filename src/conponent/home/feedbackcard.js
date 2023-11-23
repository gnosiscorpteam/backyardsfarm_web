import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const FeedbackCard = (props) => {
    const [rating, setRating] = useState(5)

    return (
        <div className="h-[365px] p-[16px] bg-secondary-100 rounded-[20px] sm:rounded-tr-[140px] sm:rounded-bl-[140px]">
            <div className="border border-secondary-200 h-[100%] rounded-[20px] sm:rounded-tr-[132px] sm:rounded-bl-[132px] py-[33px] px-[25px] flex flex-col justify-between">
                <Rating
                    initialValue={rating} readonly iconsCount={5} size={20}
                />
                <div>
                    <p>{props.item.title}</p>
                    <p className="text-justify">{props.item.description}</p>
                </div>
                <p className="text-end font-bold">{props.item.name}</p>
            </div>
        </div>
    );
}

export default FeedbackCard;