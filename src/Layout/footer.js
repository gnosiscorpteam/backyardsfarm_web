import React from "react";
import Input from "../conponent/input";

const Footer = () => {
    return (
        <div className="bg-primary-300 py-[30px] xl:pt-[70px] xl:pb-[50px] text-white">
            <div className=" max-w-[1200px] px-[20px] mx-auto grid gird-cols-1 xl:grid-cols-1 gap-4">
                <div className="block sm:flex sm:justify-between pb-[20px] border-b">
                    <div className="grid gap-4 grid-cols-1 ssm:grid-cols-2 pb-[15px] flex justify-between">
                        <div>
                            <img src="./logo.svg" className="w-[136px]" />
                        </div>

                    </div>
                    <div className="grid">
                        <a href="/" className="pb-2">Home</a>
                        <a href="/products" className="pb-2">Products</a>
                        <a href="/contactus" className="pb-2">Contact Us</a>
                    </div>
                    <div className="grid">
                        <div className="">Follow Us</div>
                        <div className="flex">
                            <a target="_blank" href="https://www.instagram.com/farmsbackyard/">
                                <img src="./static/icon/instagram.svg" className="pr-3 h-[24px]" />
                            </a>
                            <a target="_blank" href="#">
                                <img src="./static/icon/whatsapp.svg" className="pr-3 h-[24px]" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61552563112931" target="_blank">
                                <img src="./static/icon/facebook.svg" className="pr-3 h-[24px]" />
                            </a>
                            <a target="_blank" href="#">
                                <img src="./static/icon/youtube.svg" className="pr-3 h-[24px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;