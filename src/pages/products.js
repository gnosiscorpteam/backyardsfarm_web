import React, { useEffect, useState } from "react";
import ProductItem from "../conponent/productItem";
import { currentproducts } from "../const/product";
import { Helmet } from "react-helmet-async";

const Products = () => {

    const [filteredResults, setFilteredResults] = useState(currentproducts);
    const [searchInput, setSearchInput] = useState('');
    const [isFocus, SetFocus] = useState(false);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchValue !== '') {
            const filteredData = currentproducts.filter((item) => {
                return Object.values(item.title).join('').toLowerCase().includes(searchValue.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(currentproducts)
        }
    }


    return (
        <div className="max-w-[600px] sm:max-w-[760px] xl:max-w-[1000px] pb-[20px] mx-auto mt-[50px] lg:mt-[50px] productbg bg-opacity-50">
            <Helmet>
                <title>BackyardsFarm | Products</title>
            </Helmet>
            <div className="productbg-container">
                <div className="pt-5 lg:pt-20 max-w-[560px] mx-auto">
                    <div className="relative flex items-end  mb-4 px-[16px]">
                        <input
                            type="text"
                            autoFocus
                            onFocus={() => SetFocus(true)}
                            onBlur={() => SetFocus(false)}
                            className={`bg-[white] rounded-full h-[50px] px-5 text-md w-full ${isFocus ? 'shadow-xl' : ''}`}
                            placeholder="Enter the product name"
                            label="product"
                            name="product"
                            onChange={(e) => searchItems(e.target.value)}
                        />
                        <div className="flex justify-center items-center w-[45px] h-[45px] bg-primary-200 absolute right-[18px] top-[2px] rounded-full">
                            <img src="./static/icon/search.svg" className="w-[16px]" />
                        </div>
                    </div>
                    {/* <select onChange={onOptionChangeHandler}>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select> */}
                </div>
                <div className="pt-10 pb-4 divide-y divide-[#dddddd]">
                    {
                        filteredResults.map((item, index) => {
                            return (
                                <ProductItem key={index} item={item} />
                            );
                        })
                    }
                </div>
            </div>
            <div className="flex justify-center pb-4">
                <div class="bg-primary-100 border-l-4 border-primary-300 text-primary-400 p-4" role="alert">
                    <p class="font-bold pb-1">Informational Message</p>
                    <p>Please note that grow times can take up to 10 days from date of order</p>
                </div>
            </div>
        </div>
    );
}

export default Products;