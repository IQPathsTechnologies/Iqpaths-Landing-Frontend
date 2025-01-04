import React, {useState, useEffect, useContext} from "react";
import styles from "./NewsletterSection.module.css";
import { UserContext } from '../../context/userContext';
import { AuthService } from '../../axios/User';

const NewsletterSection = () => {
  const data = {
    title: "Newsletter - Stay tune and get the latest Update",
    description:
      "Know about insights and interview tips of IQPath early from the rest...",
    buttonText: "SUBSCRIBE",
  };

  const [newsletterData, setNewsletterData] = useState(false);
  const {user} = useContext(UserContext);
  const apiClass = new AuthService();

  let newsletterSubscribe;
  
  useEffect(() => {
    if(user){
      newsletterSubscribe = user.newsletterSubscribe;
      setNewsletterData(newsletterSubscribe);
    }
  }, [user])



  const handleSubscribe = async () => {
    try {
      const response = await apiClass.updateNewsletterSubscription();
      setNewsletterData(response.data.data.newsletterSubscribe);
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
    }
  }

  return (
    <div className={styles.newsletterSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
      </div>
      <div 
        className={`${styles.subscribeButton} ${newsletterData ? styles.subscribed : ''}`} 
        onClick={handleSubscribe}
      >
        {newsletterData ? "Subscribed" : "Subscribe"}
      </div>
    </div>
  );
};

export default NewsletterSection;
