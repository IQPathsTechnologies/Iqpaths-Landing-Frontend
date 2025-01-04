import React, { useState, useEffect } from "react";
import LectureHeader from "./LectureHeader";
import LectureLeft from "./LectureLeft";
import LectureRight from "./LectureRight";
import LectureMiddle from "./LectureMiddle";
import styles from "./Lecture.module.css";
import { AuthService } from '../../axios/User';
import { useParams } from "react-router-dom";

const Lecture = () => {
  // const [isRightVisible, setIsRightVisible] = useState(true);
  const [chapters, setChapters] = useState([]); 
  // const [lectures, setLectures] = useState([]); 
  const [selectedLecture, setSelectedLecture] = useState(null); 
  const [selectedChapter, setSelectedChapter] = useState(null); 
  const apiClass = new AuthService();


  // const { courseId } = useParams();
  const courseId = "677676a2cedfbdb0b89e4636"; 

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await apiClass.getPurchasedCourseDetails(courseId);
        console.log(response.details.chapters);
        setChapters(response.details.chapters);
        // const lectures = response.details.chapters.map((chapters) => chapters.lectures);
        // setLectures(lectures);
        // console.log('Lecture :: fetchChapters :: response', lectures);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };
    fetchChapters();
  }, []);


  // const fetchLecture = async (chapterId) => {
  //   try {
  //     const response = await apiClass.getChapterLectureByChapterId(chapterId);
  //     setLectures(response.details.lectures);
  //     // console.log('Lecture :: fetchLecture :: response', response);
  //   } catch (error) {
  //     console.error("Error fetching lectures:", error);
  //   }
  // };

  const handleLectureSelect = (lecture , ChapterSectionId) =>{
    setSelectedLecture(lecture);
    setSelectedChapter(ChapterSectionId)
    // console.log("lecture is  line number 52", lecture);
    // console.log("chapter selectionid is line number 53 ", ChapterSectionId);
  }
  const nextPrevLecture = async (chapterId, lectureId, flag) => {
    try{
      const response = await apiClass.getNextPrevLecture(chapterId, lectureId);
      if(flag === 'next'){
        setSelectedLecture(response.details.nextLecture);
      }
      else if(flag == 'prev'){
        setSelectedLecture(response.details.prevLecture);
      }
    } catch (error) {
      console.error("Error fetching next/prev lectures:", error);
    }
  }
  const handleLectureSelectionInHeader = (lectureDetails)=>{
    console.log(lectureDetails);
  }
  return (
    <div className={styles.appContainer}>
      {/* Header */}
      <LectureHeader 
        // navigation= {nextPrevLecture}
        
        selectedChapter={selectedChapter}
        selectedLecture={selectedLecture}
        getNextPreviousDetails ={handleLectureSelectionInHeader}
      />

      <div className={styles.mainContainer}>
        {/* Left Section */}
        <div className={styles.leftContainer}>
          <LectureLeft
            chapters = {chapters}
            onLectureSelect = {handleLectureSelect}
          />
        </div>

        <div className={styles.middleContainer}>
          <LectureMiddle 
            selectedLecture={selectedLecture}
          />
        </div>

        {/* Right Section */}
        {/* <LectureRight isVisible={isRightVisible} toggleVisibility={setIsRightVisible} /> */}
      </div>
    </div>
  );
};

export default Lecture;
