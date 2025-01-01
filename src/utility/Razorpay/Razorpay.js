
const loadRazorPay = () => {
    const razorPayScript = document.createElement("script");
    razorPayScript.src = "https://checkout.razorpay.com/v1/checkout.js";
    razorPayScript.onerror = () => {
      console.error("RazorPay SDK failed to load. Are you online?");
    };
    document.body.append(razorPayScript);
  };


const getRazorPay = (razorOpts) => {
    // if (!window.Razorpay) {
    //     throw new Error("RazorPay SDK is not loaded yet.");
    // }
    return new window.Razorpay(razorOpts);
};

export { loadRazorPay, getRazorPay };
