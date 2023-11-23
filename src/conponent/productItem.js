import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

const ProductItem = (props) => {
    const navigate = useNavigate();
    const [rating, setRating] = useState(5)
    return (
        <div className="grid grid-cols-1 ssm:grid-cols-4 gap-4 py-4 px-4">
            <div className="flex items-center justify-between block ssm:col-span-1">
                <img src={props.item.image} className="max-w-[200px] w-[100%] h-[130px] object-cover" />
                <button className="bg-secondary-200 text-primary-50 py-2 px-4 rounded ssm:hidden"  onClick={()=>{navigate(`/${props.item.id}`);}}>Order</button>
            </div>
            <div className="ssm:col-span-3 flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">{props.item.title}</p>
                    {
                        props.item.stock == "In Stock" ? 
                        <div><p className="text-primary-200 px-2 border border-[2px] border-primary-200 rounded font-bold">In Stock</p></div>
                        :
                        <div><p className="text-secondary-200 px-2 border border-[2px] border-secondary-200 rounded font-bold">Out of Stock</p></div>
                    }
                </div>
                <p className="py-3 truncate ">{props.item.description}</p>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="flex items-center">
                            <span className="mr-5"><span className="font-bold">Price: &nbsp;</span> {props.item.price} / oz</span>
                            <Rating
                                initialValue={rating} readonly iconsCount = {5} size = {24} className="flex items-center"
                            />
                        </div>
                        <div>
                        <span className="text-sm">Minimum 10 ounce order or delivery fee will apply</span>
                        </div>
                    </div>
                    <button className="bg-secondary-200 text-primary-50 py-2 px-4 rounded hidden ssm:block hover:bg-secondary-300 hover:shadow-xl" onClick={()=>{navigate(`/${props.item.id}`);}}>Order</button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;