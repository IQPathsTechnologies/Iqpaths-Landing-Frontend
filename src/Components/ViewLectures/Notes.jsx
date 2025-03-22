import React, { useEffect, useState } from "react";
import styles from "./Notes.module.css";
import { AuthService } from '../../axios/User';
import NoteCard from "./NoteCard";

const NotesDummy = [
  {
    name: "1notes",
    link: "https://docs.google.com/document/d/1E99X2TMZ0BBaGSqVfeMIPxVcCvddslhxfZmd9uAt8LY/edit?usp=drive_link"
  },
  {
    name: "2notes",
    link: "https://docs.google.com/document/d/1E99X2TMZ0BBaGSqVfeMIPxVcCvddslhxfZmd9uAt8LY/edit?usp=drive_link"
  },
  {
    name: "3notes",
    link: "https://docs.google.com/document/d/1E99X2TMZ0BBaGSqVfeMIPxVcCvddslhxfZmd9uAt8LY/edit?usp=drive_link"
  }
];


const Notes = ({lectureId, selectedLecture}) => {
  // const [Notes, setNotes] = useState();


  console.log(selectedLecture)

  //yaha add karna hai ki notes nahi hai to null

  if(!lectureId)
    return null

  

  const apiClass = new AuthService()


  function getAccess(){
    const response = apiClass.grantAccess({lectureId});
    // setNotes(response);
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1 className={styles.title}>Notes</h1>
      </div>
      <div className={styles.button} onClick={() => getAccess()}>
        <div>
          Get Notes
        </div>
      </div>

      <div className={styles.notesContainer}>
        {
          NotesDummy.map((note)=>{
            return <NoteCard title={note.name} link = {note.link}/>
          })
        }
        
      </div>

    </div>
  );
};

export default Notes;
