import { useEffect } from "react";
import axios from "axios";

const OAuthSuccess = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
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
          // window.location.href = `/${redirectTo}`;
        } catch (err) {
          console.error("Failed to set cookie:", err);
          // window.location.href = "/";
        }
      } else {
        window.location.href = "/";
      }
    };

    setTokenAndRedirect();
  }, []);

  return (
    <div>Redirecting...</div>
  );
};

export default OAuthSuccess;
