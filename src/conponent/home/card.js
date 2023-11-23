import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const Card = (props) => {
    const [rating, setRating] = useState(5);
    const navigate = useNavigate();
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className={`h-[280px] bg-primary-50 p-[16px] rounded-tl-[45px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[45px] ${isHovering ? "shadow-xl card-hover" : ""}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            { isHovering ? 
                null : 
                <div className="h-[160px] flex justify-center items-center bg-white rounded-tl-[40px] rounded-br-[40px]">
                    <img className="h-full rounded-tl-[40px] rounded-br-[40px]" src={props.item.image} />
                </div>

            }
            <div className={isHovering ? "grid grid-cols-1 gap-4 content-between" : ""} style={{backgroundImage: isHovering ? `url("./static/red_logo_2.svg")` : 'none', backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}}>
                <div className="flex justify-between pt-3">
                    <p className={isHovering ? "text-md font-bold" : "text-sm"}>{props.item.title}</p>
                    <Rating
                        initialValue={rating} readonly iconsCount={5} size={20}
                    />
                </div>
                {
                    isHovering ?
                        <p className="text-sm py-1 break-all">10% off for recurring subscription. $2.50 per ounce - 10% = $2.25 per ounce *minimum 10 oz order</p>
                        :
                        <p className="text-xs py-1 break-all">10% off for recurring subscription...</p>

                }
                <div className="flex justify-between pr-4">
                    <p className="text-md font-semibold">{props.item.price} <span className="text-primary-300">&nbsp;/ oz</span></p>
                    {
                        isHovering ?
                            <button className="text-white bg-secondary-200 px-2 py-1 rounded-lg hover:bg-secondary-300 hover:shadow-xl" onClick={() => navigate(`/${props.item.id}`)}>Order</button>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
}

export default Card;