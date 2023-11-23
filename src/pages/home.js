import React, { useState } from "react";
import Video from "../assets/video.mov"
import { allproducts, product, sepicialoffers } from "../const/product";
import ProductCard from "../conponent/home/productcard";
import Card from "../conponent/home/card";
import FeedbackCard from "../conponent/home/feedbackcard";
import { feedback } from "../const/feedback";
import ContactForm from "../conponent/home/contactform";
import { whyus } from "../const/content";
import { Helmet } from "react-helmet-async";

const Home = () => {

    return (
        <div className="contactusbg">
            <div className="contactusbg-container">
                <Helmet>
                    <title>BackyardsFarm | Home</title>
                    <meta
                        name="description"
                        content="Welcome to Backyard Farm!"
                    />
                </Helmet>
                {/* Intro Video */}
                <div className="flex justify-center py-[20px] xl:pt-[30px] xl:pb-[40px] rounded-[50px] 2xl:rounded-tr-[200px] 2xl:rounded-bl-[200px] px-[20px]">
                    <video loop autoPlay muted playsInline>
                        <source src={Video} type="video/mp4" id="myVideo" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Product */}
                <div className="bg-secondary-100 py-[30px]">
                    <div className="max-w-[300px] xs:max-w-[500px] sm:max-w-[700px] xl:max-w-[1000px] mx-auto">
                        <p className="text-xl text-primary-300 pb-[10px] xs:pb-[16px] ml-4 underline underline-offset-[10px] font-bold">Products</p>
                        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 gap-4">
                            {
                                product.map((item, index) => {
                                    return (
                                        <ProductCard key={index} item={item} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Who are we? */}
                <div>
                    <div className="max-w-[1200px] mx-auto relative py-[40px] px-[20px] hidden xl:block">
                        <div className="bg-primary-100 h-[494px] w-[950px] rounded-tr-[200px] rounded-bl-[200px] pl-[70px] flex flex-col justify-center" style={{ backgroundImage: `url("./static/red_logo.svg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                            <div className="w-[550px]">
                                <p className="text-xl text-primary-300 pb-[20px] font-bold">Who are we?</p>
                                <p className="text-justify text-base">{whyus}</p>
                            </div>
                        </div>
                        <img src="./static/home/whyus.png" className="absolute right-0 top-[40px]" />
                    </div>
                    <div className="xl:hidden py-[40px]">
                        <div className="bg-primary-100 rounded-[20px] xs:rounded-tr-[50px] xs:rounded-bl-[50px] flex flex-col justify-center mx-[10px] xs:mx-[20px]">
                            <div className="p-[20px] xs:p-[40px]">
                                <p className="text-xl text-primary-300 pb-[20px] font-bold">Who are we?</p>
                                <p className="text-justify text-base  break-all">{whyus}</p>
                            </div>
                        </div>
                        <div className="px-[20px] mt-[20px]">
                            <img src="./static/home/microgreencut.png" className="rounded-[20px] xs:rounded-tl-[50px] xs:rounded-br-[50px] h-[300px] xs:h-[400px] w-[100%] object-cover" />
                        </div>
                    </div>
                </div>

                {/* Sepcial Offer */}
                <div className=" bg-primary-300 py-[36px] px-[10px]">
                    <div className="max-w-[300px] xs:max-w-[500px] sm:max-w-[700px] xl:max-w-[1000px] mx-auto">
                        <div className="pb-[16px] flex justify-between items-center w-[100%] text-primary-50">
                            <p className="font-bold text-xl">Special Offers</p>
                            {/* <p className="text-lg font-bold">See more</p> */}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                            {
                                sepicialoffers.map((item, index) => {
                                    return (
                                        <Card key={index} item={item} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* From Our Blog */}
                <div className="max-w-[1200px] mx-auto px-[20px] py-[20px] grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <div className="h-[100%] flex flex-col justify-center pr-0 xl:pr-[20px]">
                        <p className="text-xxl xl:text-xxxl text-primary-300 pb-[32px] font-bold">Find us!</p>
                        <p className="text-lg xl:text-xl">Look for our sticker at your local grocery store or Farmers Market coming soon!</p>
                    </div>
                    <div className="hidden xl:block">
                        <img src="./static/home/outblog.png" />
                    </div>
                    <div className="xl:hidden flex justify-center">
                        <img src="./static/home/outblog.png" className="rounded-[20px] xs:rounded-tl-[50px] xs:rounded-br-[50px] h-[300px] object-cover" />
                    </div>
                </div>

                {/* Bestseller */}
                {/* <div className="bg-[#F6F9EF] py-[36px] px-[10px]">
                <div className="max-w-[300px] xs:max-w-[500px] sm:max-w-[700px] xl:max-w-[1000px] mx-auto">
                    <p className="font-bold text-lg pb-[16px] text-secondary-300">Bestseller</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            allproducts.map((item, index) => {
                                return (
                                    <Card key={index} item={item} />
                                );
                            })
                        }
                    </div>
                </div>
            </div> */}

                {/* Our Customer */}
                <div className="ourcustomer pt-[32px] pb-[100px] px-[10px]">
                    <div className=" max-w-[1200px] mx-auto">
                        <p className="text-xl font-bold pb-[32px] text-white pl-[70px]">Our Customer</p>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                            {
                                feedback.map((item, index) => {
                                    return (
                                        <FeedbackCard key={index} item={item} />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="flex justify-center relative top-[-100px]">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Home;