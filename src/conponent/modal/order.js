import { Formik } from "formik";
import React, { useState } from "react";
import Modal from "react-responsive-modal";
import 'react-responsive-modal/styles.css';
import Input from "../input/modalInput";
import StripePayment from "../modal/stripe/index.js"

const OrderModal = (props) => {
    const amount = 10;
    const myRef = React.useRef(null);
    const [customerInfo, setcustomerInfo] = useState();
    const [next, setNext] = useState(false);

    const onClose = () => {
        props.onClose();
        setNext(false);
    }

    return (
        <Modal open={props.open} onClose={onClose} center={true} container={myRef.current}>
            {
                next ?
                    <StripePayment amount={props.amount} customerInfo={customerInfo} />
                    :
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            address: "",
                            city: "",
                            state: "",
                            country: "",
                            zipcode: "",
                        }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    values.email
                                )
                            ) {
                                errors.email = "Invalid email address";
                            }
                            if (!values.firstName) {
                                errors.firstName = "Required";
                            }
                            if (!values.lastName) {
                                errors.lastName = "Required";
                            }
                            if (!values.phone) {
                                errors.phone = "Required";
                            }
                            if (!values.address) {
                                errors.address = "Required";
                            }
                            if (!values.city) {
                                errors.city = "Required";
                            }
                            if (!values.state) {
                                errors.state = "Required";
                            }
                            if (!values.country) {
                                errors.country = "Required";
                            }
                            if (!values.zipcode) {
                                errors.zipcode = "Required";
                            }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting, resetForm }) => {
                            setSubmitting(false);
                            resetForm();
                            setcustomerInfo(values);
                            setNext(true)
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) =>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col justify-between w-full bg-text_base rounded-n">
                                    <p className="text-xl font-bold pb-8 text-primary-300">Customer Info</p>
                                    <div>
                                        <div className="grid grid-cols-1 xsm:grid-cols-2 gap-[4vw] mb-4">
                                            <Input
                                                label="First Name"
                                                placeholder="John"
                                                error={errors.firstName ? "error" : null}
                                                type="text"
                                                name="firstName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.firstName}
                                            />
                                            <Input
                                                label="Last Name"
                                                placeholder="Dae"
                                                error={errors.lastName ? "error" : null}
                                                type="text"
                                                name="lastName"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lastName}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 xsm:grid-cols-2 gap-[4vw] mb-4">
                                            <Input
                                                label="Email"
                                                placeholder="john@dae.com"
                                                error={errors.email ? "error" : null}
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            <Input
                                                label="Phone"
                                                placeholder="(000) 000 0000"
                                                error={errors.phone ? "error" : null}
                                                type="text"
                                                name="phone"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 gap-[4vw] mb-4">
                                            <Input
                                                label="Address"
                                                placeholder="304 Werninger Street"
                                                error={errors.address ? "error" : null}
                                                type="text"
                                                name="address"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 xsm:grid-cols-2 gap-[4vw] mb-4">
                                            <Input
                                                label="City"
                                                placeholder="Houston"
                                                error={errors.city ? "error" : null}
                                                type="text"
                                                name="city"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.city}
                                            />
                                            <Input
                                                label="State"
                                                placeholder="Texas"
                                                error={errors.state ? "error" : null}
                                                type="text"
                                                name="state"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.state}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 xsm:grid-cols-2 gap-[4vw] mb-4">
                                            <Input
                                                label="Country"
                                                placeholder="United States"
                                                error={errors.country ? "error" : null}
                                                type="text"
                                                name="country"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.country}
                                            />
                                            <Input
                                                label="ZipCode"
                                                placeholder="77032"
                                                error={errors.zipcode ? "error" : null}
                                                type="text"
                                                name="zipcode"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.zipcode}
                                            />
                                        </div>
                                    </div>
                                    {/* <p className="text-lg font-bold pb-6 pt-2 text-primary-200 underline underline-offset-4">Debit or Credit Card</p>
                            <div>
                                <div className="grid grid-cols-1 gap-[4vw] mb-4">
                                    <Input
                                        label="Card Number"
                                        placeholder="1234 1234 1234 1234"
                                        error={errors.cardnumber ? "error" : null}
                                        type="text"
                                        name="cardnumber"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cardnumber}
                                    />
                                </div>
                                <div className="grid grid-cols-1 xsm:grid-cols-2 gap-[4vw] mb-4">
                                    <Input
                                        label="Expiry"
                                        placeholder="MM / YY"
                                        error={errors.expiry ? "error" : null}
                                        type="text"
                                        name="expiry"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.expiry}
                                    />
                                    <Input
                                        label="CVC"
                                        placeholder="CVC"
                                        error={errors.cvc ? "error" : null}
                                        type="text"
                                        name="cvc"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.cvc}
                                    />
                                </div>
                            </div> */}
                                    <div className="flex justify-end my-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`rounded-full bg-primary-200 text-text_base px-12 py-2 hover:shadow-xl shadow-[#C72C2B]`}
                                        >
                                            <span className="text-white">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </form>}
                    </Formik>
            }

        </Modal>
    );
}

export default OrderModal;