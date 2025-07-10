import React, { useState, useEffect } from "react";
import LectureHeader from "./LectureHeader";
import LectureLeft from "./LectureLeft";
import LectureRight from "./LectureRight";
import LectureMiddle from "./LectureMiddle";
import styles from "./Lecture.module.css";
import { AuthService } from '../../axios/User';
import { useParams, useLocation  } from "react-router-dom";
import { set } from "react-hook-form";
import Notes from './Notes'

const Lecture = () => {
  // const [isRightVisible, setIsRightVisible] = useState(true);
  const [chapters, setChapters] = useState([]); 
  // const [lectures, setLectures] = useState([]); 
  const [selectedLecture, setSelectedLecture] = useState(null); 
  const [selectedChapter, setSelectedChapter] = useState(null); 
  const apiClass = new AuthService();


  const location = useLocation();
  const { courseId } = location.state;
  // const { courseId } = useParams();


  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await apiClass.getPurchasedCourseDetails(courseId);
        // console.log(response.details.chapters);
        setChapters(response.details.chapters);
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
    const response = apiClass.grantAccess(lecture._id);
    setSelectedLecture(lecture);
    setSelectedChapter(ChapterSectionId)
    // console.log("lecture is  line number 52", lecture);
    // console.log("chapter selectionid is line number 53 ", ChapterSectionId);
  }


  const nextLecture = async (lectureId) => {
    try{
      const nextLectureId = await apiClass.getNextLecture(lectureId);
      // console.log("next lecture is", nextLectureId);

      if(nextLectureId !== "end of lectures"){
        const response = await apiClass.getLectureDetails(nextLectureId);
        // console.log("next lecture details is", response);
        setSelectedLecture(response.currentLecture);
      }

    } catch (error) {
      console.error("Error fetching next/prev lectures:", error);
    }
  }

  const PrevLecture = async (lectureId) => {

    console.log("lectureId is", lectureId);
    try{
      const prevLectureId = await apiClass.getPrevLecture(lectureId);
      console.log("prev lecture is", prevLectureId);

      if(prevLectureId !== "no prev lec"){
        const response = await apiClass.getLectureDetails(prevLectureId);
        // console.log("prev lecture details is", response);
        setSelectedLecture(response.currentLecture);
      }
      else{
        return;
      }

    } catch (error) {
      console.error("Error fetching next/prev lectures:", error);
    }
  }


  // const nextPrevLecture = async (chapterId, lectureId, flag) => {
  //   try{
  //     const response = await apiClass.getNextPrevLecture(chapterId, lectureId);
  //     if(flag === 'next'){
  //       setSelectedLecture(response.details.nextLecture);
  //     }
  //     else if(flag == 'prev'){
  //       setSelectedLecture(response.details.prevLecture);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching next/prev lectures:", error);
  //   }
  // }


  const handleLectureSelectionInHeader = (lectureDetails)=>{
    setSelectedLecture(lectureDetails);
    console.log(lectureDetails)
  }
  



  
  return (
    <div className={styles.appContainer}>
      {/* Header */}
      <LectureHeader 
        nextLecture = {nextLecture}
        PrevLecture = {PrevLecture}
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
          <div className={styles.centerElement}>
            <LectureMiddle 
              selectedLecture={selectedLecture}
            />
            <Notes
              lectureId = {selectedLecture?._id}      
              selectedLecture = {selectedLecture}
            />

          </div>
        </div>

        {/* Right Section */}
        {/* <LectureRight isVisible={isRightVisible} toggleVisibility={setIsRightVisible} /> */}
      </div>
    </div>
  );
};

export default Lecture;
