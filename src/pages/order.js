import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { currentproducts } from "../const/product";
import { Rating } from "react-simple-star-rating";
import OrderModal from "../conponent/modal/order";
import Navbar from "../Layout/navbar";
import Footer from "../Layout/footer";
import { useSnackbar } from "notistack";
import { Helmet } from "react-helmet-async";


const Order = () => {

    const [scrollTop, setScrollTop] = useState(0);
    const { enqueueSnackbar } = useSnackbar();

    const handleScroll = event => {
        setScrollTop(event.currentTarget.scrollTop);
    };


    let { id } = useParams();

    const [product, setProduct] = useState(currentproducts[id - 1]);
    const [rating, setRating] = useState(1);
    const [amount, setAmount] = useState();
    const [open, setOpen] = useState(false);
    const [notify, setNotify] = useState();

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const handleClose = () => {
        setOpen(!open);
    }

    const handleCart = () => {
        if (!localStorage.getItem("datakey")) {
            let cartdata = [];
            cartdata[0] = product;
            cartdata[0].amount = amount;
            console.log("first", cartdata)
            localStorage.setItem("datakey", JSON.stringify(cartdata))
            setNotify(parseInt(amount));
            localStorage.setItem("notify", parseInt(amount))
        }
        else {
            let cartdata = JSON.parse(localStorage.getItem("datakey"))
            let number = 0;
            cartdata.map((item) => {
                if (item.title !== product.title) {
                    number++;
                    if (number == cartdata.length) {
                        cartdata[cartdata.length] = product;
                        console.log("error", cartdata, item)
                        cartdata[cartdata.length - 1].amount = amount;
                        return
                    }
                }
                else {
                    const currentamount = parseInt(item.amount) + parseInt(amount);
                    item.amount = ""
                    item.amount = currentamount;
                    return
                }
            })
            let notifycount = 0;
            cartdata.map((item) => {
                console.log("dddddd", item.amount, notify)
                notifycount += parseInt(item.amount)
            })
            setNotify(notifycount);
            localStorage.setItem("notify", notifycount)
            localStorage.setItem("datakey", JSON.stringify(cartdata))
        }
        enqueueSnackbar("Order added to cart!", {
            variant: "success"
        });
        setAmount(0);
    }

    return (
        <div className="overflow-y-scroll h-[100vh]" onScroll={(e) => handleScroll(e)}>
            <Helmet>
                <title>BackyardsFarm | Order</title>
            </Helmet>
            <Navbar scrollTop={scrollTop} notify={notify} />
            <div className="min-h-[100vh]">
                <div className="max-w-[700px] lg:max-w-[800px] xl:max-w-[1200px] mx-auto pt-[120px] px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-5 gap-4">
                        <div className="xl:col-span-2 flex justify-center">
                            <img src={product.image} className="max-h-[500px]" />
                        </div>
                        <div className="sm:col-span-3">
                            <p className="text-xxl font-bold pb-4">{product.title}</p>
                            <div className="flex  divide-x divide-[#dddddd] text-secondary-200 items-center pb-4">
                                <Rating
                                    initialValue={rating} readonly iconsCount={1} size={24} className="flex items-center pb-1 mr-2"
                                />
                                <p className="px-2">27 reviews</p>
                                <p className="px-2">12 Q&A</p>
                            </div>
                            <p className="pb-6">
                                {product.description}
                            </p>
                            <p className="pb-6 text-sm text-secondary-200">
                                Minimum 10 ounce order or delivery fee will apply.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-primary-200 pb-4">
                                <div>
                                    <p className="pl-3 pb-1 text-primary-200 font-bold">Price</p>
                                    <div className="h-[40px] w-[100%] border border-primary-200 rounded-[8px] flex items-center px-4">{product.price} / oz</div>
                                </div>
                                <div>
                                    <p className="pl-3 pb-1 text-primary-200 font-bold">Amount <span className="text-secondary-200">*</span></p>
                                    <input type="number" placeholder="Amount" className="w-[100%] h-[40px] rounded-[8px] px-3 border border-primary-200 bg-transparent" value={amount} onChange={(e) => handleChange(e)} />
                                </div>
                            </div>

                            <div className="flex justify-end items-center">
                                <div className="flex justify-between min-w-[250px]">
                                    <p className="text-md text-primary-300 font-semibold">Price : </p>
                                    <p className="text-md text-primary-300"> &nbsp;${amount ? amount * 2.5 : 0}</p>
                                </div>
                            </div>
                            {
                                !amount || amount < 0 ?
                                    <div>
                                        <div className="flex justify-center pt-4 pb-8">
                                            <button className={`bg-primary-200 px-[40px] py-3 text-white rounded-lg opacity-50 cursor-not-allowed`} onClick={() => setOpen(true)} disabled>Add to cart</button>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <div className="flex justify-center pt-4 pb-8">
                                            {/* <button className={`bg-primary-200 px-[40px] py-3 text-white rounded-lg `} onClick={() => setOpen(true)} >Order</button> */}
                                            <button className={`bg-primary-200 px-[40px] py-3 text-white rounded-lg `} onClick={() => handleCart()} >Add to cart</button>
                                        </div>
                                    </div>
                            }
                            <OrderModal open={open} onClose={handleClose} amount={amount * 2.5 + 20} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Order;