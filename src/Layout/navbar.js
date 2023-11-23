import React, { useEffect, useState } from "react";
import { navbar_tabs } from "../const/default";
import { useLocation, useNavigate } from "react-router-dom";
import Badge from '@uiw/react-badge';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css';
import NumberInput from "../conponent/input/numberInput";
import OrderModal from "../conponent/modal/order";


const Navbar = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const [url, setUrl] = useState(null);
    const [mobile, setMobile] = useState(false);
    const [cartProducts, setCartProducts] = useState();
    const [isOpen, setIsOpen] = React.useState(false);
    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    const mobileMenu = () => {
        setMobile(!mobile)
    }

    let count = 0;
    const cartdata = JSON.parse(localStorage.getItem("datakey"))
    if (cartdata) {
        cartdata.map((item) => {
            count += parseInt(item.amount);
        })
        localStorage.setItem("notify", count);
    }

    const toggleDrawer = () => {
        let constprice = 0;
        setCartProducts(JSON.parse(localStorage.getItem("datakey")))
        setIsOpen((prevState) => !prevState)
        const cartdata = JSON.parse(localStorage.getItem("datakey"))
        if (cartdata) {
            cartdata.map((item) => {
                constprice += parseInt(item.amount) * 2.5;
                setPrice(constprice)
            })
        }
    }

    const handleOrder = () => {
        localStorage.setItem("datakey", JSON.stringify(cartProducts))
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className="z-[990] relative">
                <div className="hidden lg:block">
                    {
                        props.scrollTop == 0 ?
                            <div className="transition delay-150 duration-300">
                                <div className="h-[72px] bg-primary-300 flex items-center">
                                    <div className="max-w-[1400px] px-[20px] mx-auto w-[100%] flex justify-between">
                                        <a className="flex justify-start items-center" href="tel:18178396573">
                                            <img className="w-[24px]" src="./static/icon/call.svg" />
                                            <div className="text-white pl-2">(817)-839-6573</div>
                                        </a>
                                        <div className="text-white text-lg">Welcome to Backyard Farms</div>
                                        <div className="flex justify-end items-center">
                                            <a className="flex justify-end items-center" href="/products">
                                                <img className="w-[18px] mr-4" src="./static/icon/search.svg" />
                                            </a>
                                            <a className="cursor-pointer" onClick={() => toggleDrawer()}>
                                                {
                                                    localStorage.getItem("notify") == 0 || !localStorage.getItem("notify") ?
                                                        <img className="w-[18px]" src="./static/icon/shop.svg" />
                                                        :
                                                        <Badge count={parseInt(localStorage.getItem("notify"))} max={99}>
                                                            <img className="w-[18px]" src="./static/icon/shop.svg" />
                                                        </Badge>
                                                }
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-[1400px] mx-auto w-[100%] rounded-b-[100px] bg-secondary-300 h-[72px] flex justify-center items-center text-white ">
                                    {
                                        navbar_tabs.map((item, index) => {
                                            if (item.value === url) {
                                                return (
                                                    <a key={index} className={"ml-[50px] cursor-pointer underline-offset-8 decoration-[3px] text-base decoration-primary-100" + (url === item.value ? " underline" : "")} onClick={() => navigate(item.value)}>{item.label}</a>
                                                );
                                            }
                                            else {
                                                return (
                                                    <a key={index} className="ml-[50px] cursor-pointer underline-offset-8 decoration-[3px] text-base hover:underline hover:decoration-primary-100" onClick={() => navigate(item.value)}>{item.label}</a>
                                                );
                                            }
                                        })
                                    }
                                </div>
                                <div className="max-w-[1300px] mx-auto">
                                    <div className="absolute top-[72px] w-[200px] h-[160px] rounded-br-[100px] bg-primary-300 flex justify-center items-start pt-4">
                                        <img src="./logo.svg" className="w-[136px]" />
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="transition delay-150 duration-300 fixed z-[99] w-[100vw]">
                                <div className="fixed z-[99] w-[100vw]">
                                    <div className="h-[72px] bg-primary-300 flex items-center">
                                        <div className="max-w-[1400px] px-[20px] mx-auto w-[100%] flex justify-between">
                                            <div className="flex justify-start items-center">
                                                <img src="./logo.svg" className="h-[60px]" />
                                            </div>
                                            <div className="text-white flex items-center">
                                                {
                                                    navbar_tabs.map((item, index) => {
                                                        if (item.value === url) {
                                                            return (
                                                                <a key={index} className={"ml-[50px] cursor-pointer underline-offset-8 decoration-[3px] text-base decoration-primary-100" + (url === item.value ? " underline" : "")} onClick={() => navigate(item.value)}>{item.label}</a>
                                                            );
                                                        }
                                                        else {
                                                            return (
                                                                <a key={index} className="ml-[50px] cursor-pointer underline-offset-8 decoration-[3px] text-base hover:underline hover:decoration-primary-100" onClick={() => navigate(item.value)}>{item.label}</a>
                                                            );
                                                        }
                                                    })
                                                }
                                            </div>
                                            <div className="flex justify-end items-center">
                                                <a href="/products">
                                                    <img className="w-[18px] mr-4" src="./static/icon/search.svg" />
                                                </a>
                                                <a className="cursor-pointer" onClick={() => toggleDrawer()}>
                                                    {
                                                        localStorage.getItem("notify") == 0 || !localStorage.getItem("notify") ?
                                                            <img className="w-[18px]" src="./static/icon/shop.svg" />
                                                            :
                                                            <Badge count={parseInt(localStorage.getItem("notify"))} max={99}>
                                                                <img className="w-[18px]" src="./static/icon/shop.svg" />
                                                            </Badge>
                                                    }
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[72px]"></div>
                            </div>

                    }
                </div>

                <div className="hidden sm:block lg:hidden ">
                    <div className="fixed z-[99] w-[100vw]">
                        <div className="h-[72px] bg-primary-300 flex items-center">
                            <div className="max-w-[1400px] px-[20px] mx-auto w-[100%] flex justify-between">
                                <div className="flex justify-start items-center">
                                    <img src="./logo.svg" className="h-[60px]" />
                                </div>
                                <div className="text-white flex items-center">
                                    {
                                        navbar_tabs.map((item, index) => {
                                            if (item.value === url) {
                                                return (
                                                    <a key={index} className={"ml-[50px] cursor-pointer underline-offset-8 decoration-[3px] text-base decoration-primary-100" + (url === item.value ? " underline" : "")} onClick={() => navigate(item.value)}>{item.label}</a>
                                                );
                                            }
                                            else {
                                                return (
                                                    <a key={index} className="ml-[50px] cursor-pointer underline-offset-8 decoration-[3px] text-base hover:underline hover:decoration-primary-100" onClick={() => navigate(item.value)}>{item.label}</a>
                                                );
                                            }
                                        })
                                    }
                                </div>
                                <div className="flex justify-end items-center">
                                    <a href="/products">
                                        <img className="w-[18px] mr-4" src="./static/icon/search.svg" />
                                    </a>
                                    <a className="cursor-pointer" onClick={() => toggleDrawer()}>
                                        {
                                            localStorage.getItem("notify") == 0 || !localStorage.getItem("notify") ?
                                                <img className="w-[18px]" src="./static/icon/shop.svg" />
                                                :
                                                <Badge count={parseInt(localStorage.getItem("notify"))} max={99}>
                                                    <img className="w-[18px]" src="./static/icon/shop.svg" />
                                                </Badge>
                                        }
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[72px]"></div>
                </div>

                <div className="sm:hidden ">
                    <div className="fixed w-[100vw]">
                        <div className="h-[72px] bg-primary-300 flex items-center">
                            <div className="max-w-[1400px] px-[20px] mx-auto w-[100%] flex justify-between">
                                <div className="flex justify-start items-center">
                                    <img src="./logo.svg" className="h-[60px]" />
                                </div>
                                <div className="flex justify-end items-center">
                                    <a href="/products">
                                        <img className="w-[18px]" src="./static/icon/search.svg" />
                                    </a>
                                    <a className="cursor-pointer mx-4" onClick={() => toggleDrawer()}>
                                        {
                                            localStorage.getItem("notify") == 0 || !localStorage.getItem("notify") ?
                                                <img className="w-[18px]" src="./static/icon/shop.svg" />
                                                :
                                                <Badge count={parseInt(localStorage.getItem("notify"))} max={99} className="mr-2">
                                                    <img className="w-[18px]" src="./static/icon/shop.svg" />
                                                </Badge>
                                        }
                                    </a>
                                    <div onClick={() => mobileMenu()} className="cursor-pointer">
                                        <img className="w-[24px]" src="./static/icon/menu.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[72px]"></div>
                </div>

            </div>
            {
                mobile ?
                    <div className="lg:hidden w-full bg-primary-300 px-[20px] pt-[20px] pb-[50px] absolute top-0 z-[999] text-text_base">
                        <div className="w-full flex justify-end" onClick={() => setMobile(!mobile)}><img src="./static/icon/close.svg" className="w-[24px]" /></div>
                        <div className="grid text-white">
                            {
                                navbar_tabs.map((item, index) => {
                                    if (item.value === url) {
                                        return (
                                            <a key={index} className={" mb-4 cursor-pointer underline-offset-8 decoration-[3px] text-base decoration-primary-100" + (url === item.value ? " underline" : "")} onClick={() => {navigate(item.value); setMobile(!mobile);}}>{item.label}</a>
                                        );
                                    }
                                    else {
                                        return (
                                            <a key={index} className=" mb-4 cursor-pointer underline-offset-8 decoration-[3px] text-base hover:underline hover:decoration-primary-100" onClick={() => {navigate(item.value);setMobile(!mobile);}}>{item.label}</a>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                    :
                    null
            }
            <Drawer
                open={isOpen}
                onClose={() => toggleDrawer()}
                direction='right'
                size={350}
            >
                <div className="p-4">
                    <div className="flex xsm:hidden justify-between items-center pb-6">
                        <p className="text-xl text-center text-primary-300 font-bold">Add to cart</p>
                        <a className="cursor-pointer" onClick={() => toggleDrawer()}>
                            <img src="./static/icon/dark-close.svg" className="w-[24px]" />
                        </a>
                    </div>
                    <p className="hidden xsm:block text-xl text-center text-primary-300 font-bold pb-6">Add to cart</p>
                    {
                        cartProducts && cartProducts.map((item, index) => {
                            return (
                                <div key={index} className="pb-2">
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg">{item.title}</p>
                                        <NumberInput cartProducts={cartProducts} i={index} amount={item.amount} setCartProducts={setCartProducts} setPrice={setPrice} />
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="flex justify-end items-center pt-[30px] w-[100%]">
                        <div className="flex justify-between w-full">
                            <p className=" text-primary-300 font-semibold">Price : </p>
                            <p className=" text-primary-300"> &nbsp;${price}</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-center">
                        <div className="flex justify-between w-full border-b border-primary-100">
                            <p className=" text-primary-300 font-semibold">Delivery Fee : </p>
                            <p className=" text-primary-300">${20}</p>
                        </div>
                    </div>
                    <div className="flex justify-end items-center ">
                        <div className="flex justify-between w-full">
                            <p className=" font-bold">Total Price : </p>
                            <p className=""> &nbsp;${price + 20}</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-[30px]">
                        <button className={`bg-primary-200 px-[30px] py-2 text-white rounded-lg `} onClick={() => handleOrder()}>Order</button>
                    </div>
                </div>
            </Drawer>
            <OrderModal open={open} onClose={handleClose} amount={price + 20} />
        </div>
    );
}

export default Navbar;