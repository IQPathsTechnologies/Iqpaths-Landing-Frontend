import { useEffect } from "react";
import axios from "axios";

const OAuthSuccess = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const redirectTo = urlParams.get("redirect") || "courses";

    if (token) {
      axios.post("https://quiz.iqpaths.com/set-token", 
        { token },
        { withCredentials: true }
      )
      .then(() => {
        window.location.href = `/${redirectTo}`;
      })
      .catch((err) => {
        console.error("Failed to set cookie:", err);
        window.location.href = "/";
      });
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>Redirecting...</div>
  );
};

export default OAuthSuccess;
