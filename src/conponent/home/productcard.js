import React from "react";

const ProductCard = (props) => {
    return (
        <div className="flex flex-col items-center">
            <div className="h-[127px] w-[131px] bg-primary-100 flex items-center justify-center rounded-tl-[8px] rounded-tr-[32px] rounded-bl-[32px] rounded-br-[8px]">
                <img className="h-full rounded-tl-[8px] rounded-tr-[32px] rounded-bl-[32px] rounded-br-[8px]" src={props.item.image} />
            </div>
            <p className="font-bold pt-[10px]">{props.item.title}</p>
        </div>
    );
}

export default ProductCard;