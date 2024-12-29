import React from 'react';
import ServiceCard from '../ServiceCards/ServiceCard';
import styles from './Service.module.css';

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
        link: "/placement-preparation"
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

const Service = () => {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Services Offered</h1>
                <p>Welcome to our services page. Here you can find all the services we offer to help you achieve your goals and enhance your skills. Whether you are looking to improve your knowledge through our courses, gain practical experience with our internships, or prepare for your dream job with our placement preparation services, we have something for everyone. Explore our offerings and take the next step in your career journey.</p>
            </div>
            <div className={styles.cardContainer}>
                {content.map((data, key) => (
                    <ServiceCard key={key} data={data} className = {styles.card} />
                ))}
            </div>
        </div>
    );
};

export default Service;