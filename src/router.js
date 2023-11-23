import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import Products from "./pages/products";
import Order from "./pages/order";
import PaymentSuccess from "./pages/paymentSuccess";

const AppRouter = () => {
    return(
        <div className=" bg-primary-50">
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/aboutus" element={<Layout><AboutUs /></Layout>} />
                <Route path="/contactus" element={<Layout><ContactUs /></Layout>} />
                <Route path="/products" element={<Layout><Products /></Layout>} />
                <Route path="/success" element={<PaymentSuccess />} />
                <Route path="/:id" element={<Order />} />
            </Routes>
        </div>
    );
}

export default AppRouter;