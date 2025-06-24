import { useEffect } from "react";
import axios from "axios";

const OAuthSuccess = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log("URL Params:", urlParams);
    
    const token = urlParams.get("token");
    console.log("Token from URL:", token);
    const redirectTo = urlParams.get("redirect") || "courses";

    const setTokenAndRedirect = async () => {
      if (token) {
        try {
          const res = await axios.post(
            "https://quiz.iqpaths.com/set-token",
            { token },
            { withCredentials: true }
          );
          console.log("Token set successfully", res);
          window.location.href = `/${redirectTo}`;
        } catch (err) {
          console.error("Failed to set cookie:", err);
          window.location.href = "/";
        }
      } else {
        console.log("No token found in URL");
        window.location.href = "/";
      }
    };

    setTokenAndRedirect();
  }, []);

  return null
};

export default OAuthSuccess;
