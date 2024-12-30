import React from "react";
import styles from "./LectureRight.module.css";

const LectureRight = ({ isVisible, toggleVisibility }) => {
  const sectionData = {
    notes: [
      { id: 1, content: "3 Main Notes", timeline: "02:22 - 02:41" },
      { id: 2, content: "5 Main Notes", timeline: "03:33 - 03:51" },
    ],
    downloads: [
      { id: 1, fileName: "Lecture_Notes.pdf", link: "/downloads/Lecture_Notes.pdf" },
      { id: 2, fileName: "Starter_Code.zip", link: "/downloads/Starter_Code.zip" },
    ],
    discussions: [
      { id: 1, user: "Alice", comment: "How do you handle state in functional components?" },
      { id: 2, user: "Bob", comment: "Difference between useState and useReducer?" },
    ],
  };

  return (
    <>
      {/* Open Button (when hidden) */}
      {!isVisible && (
        <button className={styles.openButton} onClick={() => toggleVisibility(true)}>
          <span>&lt;</span>
        </button>
      )}

      {/* Right Section */}
      <aside
        className={`${styles.rightSection} ${isVisible ? styles.visible : styles.hidden}`}
      >
        {/* Close Button */}
        <button className={styles.closeButton} onClick={() => toggleVisibility(false)}>
          <span>&gt;</span>
        </button>

        <div className={styles.sectionContainer}>
          {/* Notes Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Notes</h2>
            <ul className={styles.list}>
              {sectionData.notes.map((note) => (
                <li key={note.id} className={styles.listItem}>
                  <span className={styles.noteContent}>{note.content}</span>
                  <span className={styles.timeline}>({note.timeline})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Downloads</h2>
            <ul className={styles.list}>
              {sectionData.downloads.map((download) => (
                <li key={download.id} className={styles.listItem}>
                  <img src="src/assets/files.png" alt="files" />
                  <a href={download.link} download className={styles.downloadLink}>
                    {download.fileName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Discussions Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Discussions</h2>
            <ul className={styles.list}>
              {sectionData.discussions.map((discussion) => (
                <li key={discussion.id} className={styles.listItem}>
                  <strong className={styles.user}>{discussion.user}: </strong>
                  <span className={styles.comment}>{discussion.comment}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default LectureRight;
