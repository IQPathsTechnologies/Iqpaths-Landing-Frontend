import axios from 'axios';

const createOrder = async (courseId) => {
    try {
        const {data} = await axios.post('/api/payment/createOrder', {courseId, amount: 1999},{withCredentials: true});
        return data;
    } catch (error) {
        console.log('Razorpay :: createOrder :: error', error);
        throw error;
    }
}

const verifyPayment = async (paymentDetails, successCallback) => {
    const { data } = await axios.post('/api/payment/verifyPayment', paymentDetails);
    if (data.status === "success") successCallback();
  };


export { createOrder, verifyPayment };