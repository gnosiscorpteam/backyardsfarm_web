import React from "react";
import Input from "../input";
import TextArea from "../textarea";
import { Formik } from "formik";
import { useSnackbar } from "notistack";
import axios from "axios";
import { API_BASIC_URL } from "../contact/config";

const ContactForm = () => {

    const { enqueueSnackbar } = useSnackbar();

    return (

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
                    <div className="bg-secondary-200 p-[28px] max-w-[760px] w-[100%] rounded-tl-[36px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[36px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                            <div>
                                <p className="pb-[10px] text-md font-bold text-center">Write us your comment and experience</p>
                                <Input
                                    placeholder="Full Name"
                                    type="text"
                                    name="fullname"
                                    error={errors.fullname ? "error" : null}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fullname} />
                                <Input placeholder="Your Email"
                                    type="email"
                                    name="email"
                                    error={errors.email ? "error" : null}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email} />
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
                            <img src="./static/home/contact.png" className="h-[100%] min-h-[300px] w-[100%] object-cover rounded-tr-[35px] rounded-tl-[8px] rounded-bl-[35px] rounded-br-[8px]" />
                        </div>
                    </div>
                </form>}
        </Formik>
    );
}

export default ContactForm;