import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./LectureHeader.module.css";
import { AuthService } from "../../axios/User";
import { use } from "react";

const lectureHeader = ({
  selectedChapter,
  selectedLecture,
  getNextPreviousDetails,
  nextLecture,
  PrevLecture,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const apiClass = new AuthService();
  
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  const handleBreadcrumbClick = (index) => {
    // If the first segment is 'view-lectures', navigate to '/my-learnings'
    if (pathSegments[0] === "view-lectures") {
      navigate("/my-learnings");
      return;
    }
    // Generate the path for the clicked breadcrumb
    const pathToNavigate = `/${pathSegments.slice(0, index + 1).join("/")}`;
    navigate(pathToNavigate);
  };

  // const handleNextPrevious = async (chapterId, lectureId, flag) => {
  //   try {
  //     const response = await apiClass.getNextPrevLecture(lectureId, chapterId);
  //     console.log("response", response);
  //     if (flag === "next") {
  //       getNextPreviousDetails(response.nextLecture);
  //     } else if (flag == "prev") {
  //       getNextPreviousDetails(response.preLecture);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching next/prev lectures:", error);
  //   }
  // };




  return (
    <header className={styles.header}>
      <div className={styles.breadcrumb}>
        {/* Generate breadcrumbs dynamically */}
        <span>
          <img
            src="/Home.png"
            alt="Home"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </span>
        {pathSegments?.map((segment, index) => (
          <React.Fragment key={index}>
            <div>
              <img src="/CaretRight.svg" alt="Home" />
            </div>
            <span
              onClick={() => handleBreadcrumbClick(index)}
              style={{
                cursor:
                  index === pathSegments.length - 1 ? "default" : "pointer",
              }}
              className={index === pathSegments.length - 1 ? styles.active : ""}
            >
              {decodeURIComponent(segment)}
              {console.log("segment", segment)}
            </span>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.actionIcons}>
        <div
          className={styles.buttonContainer}
          onClick={() => {
            PrevLecture( selectedLecture?._id);
          }}
        >
          <div>
            <img src="/prevLec.svg" alt="Home" />
          </div>
          <p className={styles.previous}> Previous </p>
        </div>
        <div
          className={styles.buttonContainer}
          onClick={() => {
            nextLecture( selectedLecture?._id );
          }}
        >
          <p className={styles.next}> Next </p>
          <div>
            <img src="/nextLec.svg" alt="Home" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default lectureHeader;
