import React, {useState, useEffect} from "react";
import styles from "./NewsletterSection.module.css";
import { AuthService } from '../../axios/User';

const NewsletterSection = () => {
  const data = {
    title: "Newsletter - Stay tune and get the latest Update",
    description:
      "Know about insights and interview tips of IQPath early from the rest...",
    buttonText: "SUBSCRIBE",
  };
  const [newsLetterStatus, setnewsLetterStatus] = useState(false);
  const apiClass = new AuthService();  
  useEffect(() => {
    const getnewsletterdetails = async function(){
      const response = await apiClass.CheckNewsLetterStatus();
      // console.log("response",response)
      if(response.newsLetterStatus.newsletterSubscribe){
        setnewsLetterStatus(true)
      };
      
    }
    getnewsletterdetails();
  }, [])


  const handleSubscribe = async () => {
    try {
        const response = await apiClass.updateNewsletterSubscription();
        setnewsLetterStatus(response.data.data.newsletterSubscribe);
  
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      alert("please login first");
    }
  }

  return (
    <div className={styles.newsletterSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
      </div>
      <div 
        className={`${styles.subscribeButton} ${newsLetterStatus ? styles.subscribed : ''}`} 
        onClick={handleSubscribe}
      >
        {newsLetterStatus ? "Subscribed" : "Subscribe"}
      </div>
    </div>
  );
};

export default NewsletterSection;
