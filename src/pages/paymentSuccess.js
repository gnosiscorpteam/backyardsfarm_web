import axios from 'axios';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import success from '../assets/success.gif';
import { API_BASIC_URL } from '../conponent/contact/config';
import { useSnackbar } from 'notistack';
import { Helmet } from 'react-helmet-async';

function PaymentSuccess() {

    const [searchParams, setSearchParams] = useSearchParams();

    const { enqueueSnackbar } = useSnackbar();

    var amount = searchParams.get("amount");
    var firstname = searchParams.get("firstname");
    var lastname = searchParams.get("lastname");
    var email = searchParams.get("email");
    var phone = searchParams.get("phone");
    var address = searchParams.get("address");
    var city = searchParams.get("city");
    var state = searchParams.get("state");
    var country = searchParams.get("country");
    var zipcode = searchParams.get("zipcode");


    const handleClick = async () => {

        await axios.post(`${API_BASIC_URL}/payment-success-send`, {
            support: "sales@backyards.farm",
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            address: address,
            city: city,
            state: state,
            country: country,
            zipcode: zipcode,
            amount: amount
        })
            .then((res) => {
                if (res.data.status) {
                    window.location = '/products';
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
    }

    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <Helmet>
                <title>BackyardsFarm | Payment Success</title>
            </Helmet>
            <div className='md:w-1/2 lg:w-1/3'>
                <div className='border rounded-xl shadow-xl pb-3 px-2 md:pb-6 md:px-4 bg-white'>
                    <div className='flex justify-center'>
                        <img src={success} className="w-[200px]" alt='success' />
                    </div>
                    <h2 className='text-lg h2 text-center text-primary-400 pb-3'>${amount}</h2>
                    <div className='flex justify-center mb-3'>
                        <h4 className='text-xl text-primary-400'>Payment Successed!</h4>
                    </div>
                    <div className='btn-pay text-center mx-5 mt-7' style={{ width: 'auto' }} onClick={handleClick}>OK</div>
                </div>
            </div>
        </div>
    );
}

export default PaymentSuccess;