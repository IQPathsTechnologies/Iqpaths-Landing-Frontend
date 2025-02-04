import React, {useContext,useState, useEffect} from 'react';
import styles from './Course.module.css';
import CourseSection from '../../Components/CourseSection/CourseSection'
import CourseSectionmob from '../../Components/CourseSection/CourseSectionmob'
import CourseDetails from '../../Components/CourseSection/CourseDetails'
import Roadmap from '../../Components/Roadmap/Roadmap'
import Certificate from '../../Components/Certificate/Certificate'
import Instructor from '../../Components/Instructor/Instructor'
import SimilarCourses from '../../Components/SimilarCourses/SimilarCourses'
import { UserContext } from '../../context/userContext';
import NewsletterSection from '../../Components/AllCourses/NewsletterSection'
import { useParams } from 'react-router-dom';
import { AuthService } from '../../axios/User';



const Course = () => {


    

    const { userId } = useContext(UserContext);
    const {id} = useParams();

    // console.log("ye id hai certificate k liye",id)


      const apiClass = new AuthService();
    

    const [certificate, setCertificate] = useState(null);





    useEffect(() => {
        const fetchCertificate = async()=>{
          try {
            const response = await apiClass.getCertificate(id);
            console.log("Certificate response", response);
            setCertificate(response?.certificateImage);
    
          } catch (error) {
            console.log("CourseSection me isCoursePurchased ka reponse", error);
          }
        }
        fetchCertificate();
      },[id])
      

    return (
        <div>
            <div className={styles.course}>
                <div className={styles.details}>
                    <CourseSection userId={userId}/>
                    <CourseSectionmob userId={userId}/>
                </div>
                {/* <CourseDetails /> */}
                <div className={styles.roadmap}>
                    <Roadmap />
                </div>
            </div>

            <Certificate certificate = {certificate} />
            <Instructor />
            {/* <SimilarCourses /> */}
            <NewsletterSection />
        </div>
    );
};

export default Course;