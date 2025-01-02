import axios from 'axios';

const createOrder = async (courseId, couponCode) => {
    try {
        const {data }= await axios.post('/api/payment/createOrder', {courseId, couponCode},{withCredentials: true});
        console.log('Razorpay :: createOrder :: data', data.data);
        return data.data;
    } catch (error) {
        console.log('Razorpay :: createOrder :: error', error);
        throw error;
    }
}

const verifyPayment = async (paymentDetails) => {
    const { data } = await axios.post('/api/payment/verifyPayment', paymentDetails, {withCredentials: true});
    if (data.status === "success") successCallback();
  };


export { createOrder, verifyPayment };