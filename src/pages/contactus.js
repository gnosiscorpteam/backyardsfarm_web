import { useLoadScript } from "@react-google-maps/api";
import React, { useState } from "react";
import Map from "../conponent/map";
import ContactForm from "../conponent/contact/contactform";
import { contactInfo } from "../const/default";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC4HzGjBiB-pvRD8OeWSIl0-yYdjb4UqFQ" // Add your API key
    });
    return (
        <div className="contactusbg pb-[30px]">
            <Helmet>
                <title>BackyardsFarm | Contact Us</title>
                <meta
                    name="description"
                    content="Thanks for subscribing! Address : 1452 Hughes Rd ste 200 Grapevine, TX 76051"
                />
            </Helmet>
            <div className="lg:pt-[120px] 2xl:max-w-[1200px] mx-auto contactusbg-container">
                <div className="lg:hidden h-[300px] md:h-[500px]">
                    {isLoaded ? <Map /> : null}
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-5 bg-secondary-200 lg:mx-4">
                    <div className="col-span-3 px-[20px] xs:px-[40px] py-[40px]">
                        <ContactForm />
                    </div>
                    <div className="col-span-2 h-full hidden lg:block">
                        {isLoaded ? <Map /> : null}
                    </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 py-[30px] lg:pt-[30px] lg:pb-[0px] flex flex-col items-center">
                    {
                        contactInfo.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col items-center">
                                    <a href={item.href} className="w-[50px] h-[50px] rounded-full bg-secondary-300 flex justify-center items-center">
                                        <img src={item.icon} className="w-[24px]" />
                                    </a>
                                    <p className="text-center pt-[10px] max-w-[200px] w-full">{item.description}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ContactUs;