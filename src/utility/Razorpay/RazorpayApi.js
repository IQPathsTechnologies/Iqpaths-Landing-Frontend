import axios from 'axios';
import { notifyError } from '../Tostify/Tosts';

const createOrder = async (courseId, couponCode) => {
    try {
        const {data }= await axios.post('/api/payment/createOrder', {courseId, couponCode},{withCredentials: true});
        // console.log('Razorpay :: createOrder :: data', data.data);
        return data.data;
    } catch (error) {
        console.log('Razorpay :: createOrder :: error', error);
        throw error;
    }
}

const verifyPayment = async (paymentDetails) => {
    const { data } = await axios.post('/api/payment/verifyPayment', paymentDetails, {withCredentials: true});
    console.log(data);
    if (data.success === true) 
        return true ;
    else
    {
        return false ;
    }
  };

const createCartOrder = async () => {
    try {

        const { data } = await axios.post('/api/payment/createCartOrder', {}, { withCredentials: true });
        return data.data;
    } catch (error) {
        console.log('Razorpay :: createCartOrder :: error', error);
        throw error;
    }
};


const verifyCartPayment = async (cartPaymentDetails) => {
    try {
        const { data } = await axios.post('/api/payment/verifyCartPayment', cartPaymentDetails, { withCredentials: true });
        return data.success === true;
    } catch (error) {
        // console.log('Razorpay :: verifyCardPayment :: error', error);
        notifyError("failed to purchase course");
        // throw error;
    }
};

export { createOrder, verifyPayment, createCartOrder, verifyCartPayment }