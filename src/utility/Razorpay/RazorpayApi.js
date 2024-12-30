import axios from 'axios';

const createOrder = async (id) => {
    try {
        const {data} = await axios.post('/api/payment/createOrder', {id, amount: 2000},{withCredentials: true});
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