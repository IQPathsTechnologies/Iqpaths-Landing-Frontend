import React, { useState, useContext, useEffect } from 'react';
import ServiceCard2 from '../ServiceCards/ServiceCard2';
import styles from './Service.module.css';
import { AuthService } from '../../axios/User';


const apiClass = new AuthService();




const Service = () => {
    const [content, setContent] = useState([]);


    const getServices = async () => {
        try {
            const services =  await apiClass.getServices();
            if (services.data) {
                // console.log("Service :: getServices :: services", services.data.data);
                const sortedServices = services.data.data.sort((a, b) => {
                    const indexA = a.index !== undefined ? Number(a.index) : Infinity; // Default to Infinity if no index
                    const indexB = b.index !== undefined ? Number(b.index) : Infinity; // Default to Infinity if no index
                    return indexA - indexB;
                });
                // console.log("Service :: getServices :: sortedServices", sortedServices);
                setContent(sortedServices);
            }            
        } catch (error) {
            console.log("Service :: getServices :: error", error);
            throw error;
        }
    }
    
    useEffect(() => {
        getServices();
    }, []);
    // console.log(content);
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Services Offered</h1>
          <p>
            We specialize in delivering comprehensive, data-driven learning
            solutions, advanced software development training, and tailored
            placement services, all designed to empower individuals with the
            skills, knowledge, and opportunities they need to excel in their
            careers and achieve their professional aspirations.
          </p>
        </div>
        <div className={styles.cardContainer}>
          {/* {console.log(content)} */}
          {Array.isArray(content) &&
            [...content]
              .sort((a, b) => (a.index ?? Infinity) - (b.index ?? Infinity))
              .map((data, key) => (
                <ServiceCard2 key={key} data={data} className={styles.card} />
              ))}
        </div>
      </div>
    );
};

export default Service;