import React from "react";
import {useNavigate, useLocation } from "react-router-dom";
import styles from "./lectureHeader.module.css";

const lectureHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter((segment) => segment);

  const handleBreadcrumbClick = (index) => {
    // Generate the path for the clicked breadcrumb
    const pathToNavigate = `/${pathSegments.slice(0, index + 1).join("/")}`;
    navigate(pathToNavigate);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navigation}>
      </div>
      <div className={styles.breadcrumb}>
        {/* Generate breadcrumbs dynamically */}
        <span>
          <img src="/Home.png" alt="Home" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
        </span>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={index}>
            <p> &gt; </p>
            <span
              onClick={() => handleBreadcrumbClick(index)}
              style={{ cursor: index === pathSegments.length - 1 ? "default" : "pointer" }}
              className={index === pathSegments.length - 1 ? styles.active : ""}
            >
              {decodeURIComponent(segment)}
            </span>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.actionIcons}>
        <p className={styles.icon}> &lt; </p>
        <p className={styles.previous}> Previous </p>
        <p className={styles.next}> Next </p>
        <p className={styles.icon}> &gt; </p>
      </div>
    </header>
  );
};

export default lectureHeader;
