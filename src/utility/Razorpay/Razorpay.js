const loadRazorPay = () => {
    return new Promise((resolve, reject) => {
        const razorPayScript = document.createElement("script");
        razorPayScript.src = "https://checkout.razorpay.com/v1/checkout.js";
        razorPayScript.onload = () => resolve(true); // Resolve the promise when script is loaded
        razorPayScript.onerror = () => {
            console.error("RazorPay SDK failed to load. Are you online?");
            reject(new Error("RazorPay SDK failed to load."));
        };
        document.body.append(razorPayScript);
    });
};

const getRazorPay = (razorOpts) => {
    if (!window.Razorpay) {
        throw new Error("RazorPay SDK is not loaded yet.");
    }
    return new window.Razorpay(razorOpts);
};

export { loadRazorPay, getRazorPay };
