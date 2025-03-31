import React from 'react';
import styles from './Roadmap.module.css';

const roadmapSteps = [
  {
    id: 1,
    title: 'Find a role that suits you',
    description: 'Discover open positions and find your desired one in the Visioncraft website, job listings or social media.',
  },
  {
    id: 2,
    title: 'Send your application',
    description: 'Some simple questions should be answered and your contact information is required.',
  },
  {
    id: 3,
    title: 'Receive your interview invite',
    description: 'We review all applications within 3 working days and send invitation to candidates.',
  },
  {
    id: 4,
    title: 'Choose an interview slot',
    description: 'You will have a friendly discussion with the CEO and your supervisor to talk about the work, life and etc.',
  },
  {
    id: 5,
    title: 'Preliminary Interview',
    description: "Sometimes, we ask candidates to participate in some technical challenge that is designated to demonstrate candidates' proficiency.",
  },
  {
    id: 6,
    title: 'Meet your teammates',
    description: 'To us it is crucial to make sure all team members feel comfortable. It is why we do try to have diverse but culturally fitted team members.',
  },
  {
    id: 7,
    title: 'Interview with our CEO',
    description: 'Your colleagues are waiting for you to say a warm welcome.',
  },
  {
    id: 8,
    title: 'Start a new journey!',
    description: '',
    icon: '🤝',
  },
];

const Roadmap = () => {
  return (
    <div className={styles.container}>
         <h2 className={styles.heading}>How to join IQ Paths?</h2>
      <div className={styles.timeline}>
        {roadmapSteps.map((step, index) => (
          <div key={step.id} className={styles.stepContainer}>
            <div
              className={`${styles.stepContent} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
            >
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
            <div
              className={`${styles.stepCircle} ${styles.icon} ${
                index === 0 ? styles.blueBorder : ''
              }`}
            >
              {step.icon ? step.icon : String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
