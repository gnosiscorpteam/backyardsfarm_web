import React from "react";
import Input from "../input";
import TextArea from "../textarea";
import { Formik } from "formik";
import { API_BASIC_URL } from "./config";
import axios from "axios";
import { useSnackbar } from "notistack";

const ContactForm = () => {
    const { enqueueSnackbar } = useSnackbar();

    return (
        <div>
            <Formik
                initialValues={{
                    fullname: "",
                    email: "",
                    msg: "",
                    support: "sales@backyards.farm"
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
                    if (!values.fullname) {
                        errors.fullname = "Required";
                    }
                    if (!values.msg) {
                        errors.msg = "Required";
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    
                    setSubmitting(false);
                    resetForm();
                    await axios
                        .post(`${API_BASIC_URL}/contact`, values)
                        .then(res => {
                            console.log("res", res.data.status);
                            if (res.data.status) {
                                enqueueSnackbar("Message Success!", {
                                    variant: "success"
                                });
                            }
                        })
                        .catch(error => {
                            console.log("error", error);
                            enqueueSnackbar("Message Failed!", {
                                variant: "error"
                            });
                        });
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
                        <div>
                            <p className="pb-[10px] text-primary-50 text-xl font-bold text-center">Contact Us</p>
                            <p className="pl-3 pb-1 text-white">Full Name *</p>
                            <Input
                                placeholder="Full Name"
                                type="text"
                                name="fullname"
                                error={errors.fullname ? "error" : null}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fullname} />
                            <p className="pt-[10px] pl-3 pb-1 text-white">Email *</p>
                            <Input placeholder="Your Email"
                                type="email"
                                name="email"
                                error={errors.email ? "error" : null}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email} />
                            <p className="pt-[10px] pl-3 pb-1 text-white">Message *</p>
                            <TextArea
                                placeholder="Write a message here"
                                type="text"
                                name="msg"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.msg}
                            />
                            <button type="submit" disabled={isSubmitting} className="bg-secondary-300 rounded-tl-[8px] rounded-br-[8px] w-[100%] h-[40px] text-center text-white">Submit your comments</button>
                        </div>
                    </form>}
            </Formik>
        </div>
    );
}

export default ContactForm;