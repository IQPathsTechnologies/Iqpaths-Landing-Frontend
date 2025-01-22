import React, { useState, useContext, useEffect } from 'react';
import ServiceCard2 from '../ServiceCards/ServiceCard2';
import styles from './Service.module.css';
import { AuthService } from '../../axios/User';

const content = [
    {
        index: 0,
        logo: "/src/assets/servicesImages/desktop_windows.png",
        title: "Courses",
        description: "We offer a variety of courses to enhance your skills. Our courses are designed by industry experts and cover a wide range of topics to help you stay ahead in your career. Whether you are a beginner or an experienced professional, we have something for everyone.",
        link: "/Courses"
    },
    {
        index: 1,
        logo: "/src/assets/servicesImages/thumb_up_alt.png",
        title: "Internship",
        description: "Gain practical experience through our internship programs. Our internships provide hands-on experience in real-world projects, helping you to apply your knowledge and skills in a professional setting. Get mentored by industry professionals and build a strong foundation for your career.",
        link: "/internship"
    },
    {
        index: 2,
        logo: "/src/assets/servicesImages/desktop_mac.png",
        title: "Placement Preparation",
        description: "Prepare for your dream job with our placement preparation services. We offer comprehensive training and resources to help you excel in interviews and secure your desired job. From resume building to mock interviews, we cover all aspects of the placement process.",
        link: "/placement"
    },
    {
        index: 3,
        logo: "/src/assets/servicesImages/dock.png",
        title: "Industry Projects",
        description: "Work on real-world industry projects to gain hands-on experience. Our projects are designed to give you practical exposure to industry standards and practices. Collaborate with professionals and enhance your problem-solving skills while working on live projects.",
        link: "/industry-projects"
    },
    {
        index: 4,
        logo: "/src/assets/servicesImages/insert_chart.png",
        title: "Mock Technical Interviews",
        description: "Practice and excel in technical interviews with our mock sessions. Our mock interviews are conducted by experienced professionals who provide valuable feedback and tips to help you improve. Gain confidence and be well-prepared.",
        link: "/mock-interviews"
    },
    {
        index: 5,
        logo: "/src/assets/servicesImages/developer_mode.png",
        title: "Workshops & Webinars",
        description: "Join our workshops and webinars to stay updated with the latest trends. Our sessions are conducted by industry experts and cover a wide range of topics. Enhance your knowledge and skills by participating in our interactive and informative workshops and webinars.",
        link: "/workshops-webinars"
    }
];

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
                <p>We specialize in delivering comprehensive, data-driven learning solutions, advanced software development training, and tailored placement services, all designed to empower individuals with the skills, knowledge, and opportunities they need to excel in their careers and achieve their professional aspirations.</p>
            </div>
            <div className={styles.cardContainer}>
                {content?.map((data, key) => (
                    <ServiceCard2 key={key} data={data} className = {styles.card} />
                ))}
            </div>
        </div>
    );
};

export default Service;