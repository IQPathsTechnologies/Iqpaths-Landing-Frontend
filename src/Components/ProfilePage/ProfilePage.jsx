import React, { useState, useEffect } from 'react';
import styles from './ProfilePage.module.css';
import { AuthService } from '../../axios/User';


const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('Profile');
  const [isEditing, setIsEditing] = useState(false); // Track editing state
  const [userDetails, setUserDetails] = useState();
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();


  const apiClass = new AuthService();

  const [formData, setFormData] = useState({
    name: 'Hricha Sharma',
    mobileNumber: '1234567890',
    bio: 'Passionate developer with expertise in web development.',
    language: 'en-US',
    email: 'sharmahricha6@gmail.com',
    password: '',
    confirmPassword: '',
  });

  const [selectedImage, setSelectedImage] = useState(null); // For photo section

  const sections = [
    { name: 'View public profile', link: '/my-learnings' },
    { name: 'Profile' },
    { name: 'Photo' },
    { name: 'Account Security' },
    { name: 'Close account' },
  ];

  const handleEditClick = () => setIsEditing(true);
  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({ ...formData, password: '', confirmPassword: '' }); // Reset passwords on cancel
  };


  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await apiClass.getUserDetails();
        console.log('ProfilePage :: fetchUserDetails :: response', response);
        setUserDetails(response.user);
      } catch (error) {
        console.error("ProfilePage :: fetchUserDetails", error);
      }
    };
    fetchUserDetails();
  }, []);
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };



  const handlePhotoUpdate = async () => {
    const formData = new FormData();
    formData.append('profilePhoto', selectedImage);
    console.log("form data me ye hia ")
    try {
      const response = await apiClass.updateProfilePhoto(formData);
      console.log('ProfilePage :: handlePhotoUpdate :: response', response);
    } catch (error) {
      console.error("ProfilePage :: handlePhotoUpdate", error);
    }
  };



  const renderContent = () => {
    switch (activeSection) {
      case 'Profile':
        return (
          <div className={styles.content}>
            <h2 className={styles.heading}>Public Profile</h2>
            <p className={styles.description}>Add information about yourself</p>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Name:</label>
                <input
                  className={styles.input}
                  type="text"
                  id="name"
                  value={formData.name}
                  placeholder="Enter you full name"
                  disabled={true}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="mobileNumber">Mobile Number:</label>
                <input
                  className={styles.input}
                  type="tel"
                  id="mobileNumber"
                  value={formData.mobileNumber}
                  placeholder="Enter you mobile number"
                  disabled={true}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="bio">Bio:</label>
                <textarea
                  className={styles.textarea}
                  id="bio"
                  value={formData.bio}
                  placeholder="Tell more about yourself"
                  disabled={!isEditing}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="language">Language:</label>
                <select
                  className={styles.select}
                  id="language"
                  value={formData.language}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                >
                  <option value="en-US">English (US)</option>
                  <option value="en-GB">English (UK)</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                </select>
              </div>
              {isEditing ? (
                <div className={styles.buttonGroupRow}>
                  <button
                    type="button"
                    className={styles.buttonPrimary}
                    onClick={() => setIsEditing(false)}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className={styles.buttonSecondary}
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className={styles.buttonGroupRow}>
                  <button
                    type="button"
                    className={styles.buttonPrimary}
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                </div>
              )}
            </form>
          </div>
        );
      case 'Photo':
        return (
          <div className={styles.content}>
            <h2 className={styles.heading}>Photo</h2>
            <p className={styles.description}>
              Add a nice photo of yourself for your profile.
            </p>
            <div className={styles.photoSection}>
              <div className={styles.imagePreview}>
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className={styles.previewImage}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <span className={styles.icon}>👤</span>
                  </div>
                )}
              </div>
              <div className={styles.uploadControls}>
                <input
                  type="file"
                  id="uploadImage"
                  className={styles.fileInput}
                  onChange={handleImageChange}
                />
                <label htmlFor="uploadImage" className={styles.uploadButton}>
                  Upload image
                </label>
                <button type="button" className={styles.saveButton} onClick={handlePhotoUpdate}>
                  Save
                </button>
              </div>
            </div>
          </div>
        );
      case 'Account Security':
        return (
          <div className={styles.content}>
            <h2 className={styles.heading}>Account Security</h2>
            <p className={styles.description}>
              Edit your account settings and change your password here.
            </p>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email:</label>
                <p className={styles.emailText}>
                  Your email address is <span>{userDetails?.email}</span>
                </p>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="password">Enter new password:</label>
                <input
                  className={styles.input}
                  type="password"
                  id="password"
                  placeholder="Enter new password"
                  value={formData.password}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="confirmPassword">Re-type new password:</label>
                <input
                  className={styles.input}
                  type="password"
                  id="confirmPassword"
                  placeholder="Re-type new password"
                  value={formData.confirmPassword}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                />
              </div>
              {isEditing ? (
                <div className={styles.buttonGroupRow}>
                  <button
                    type="button"
                    className={styles.buttonPrimary}
                    onClick={() => setIsEditing(false)}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className={styles.buttonSecondary}
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className={styles.buttonGroupRow}>
                  <button
                    type="button"
                    className={styles.buttonPrimary}
                    onClick={handleEditClick}
                  > 
                    Edit
                  </button>
                </div>
              )}
            </form>
          </div>
        );
        case 'Close account':
        return (
          <div className={styles.content}>
            <h2 className={styles.heading}>Close account</h2>
            <p className={styles.description}>
            Close your account permanently.
            </p>
            <p className={styles.warning}>Warning:</p>
            <p className={styles.closePara}>If you close your account, you will be unsubscribed from all 14 of your courses and will lose access to your account and data associated with your account forever, even if you choose to create a new account using the same email address in the future.</p>
            <p className={styles.closePara}>Please note, if you want to reinstate your account after submitting a deletion request, you will have 14 days after the initial submission date to reach out to hr@iqpaths.com to cancel this request.</p>
            <button
                    type="button"
                    className={styles.buttonPrimary}
                    onClick={handleEditClick}
                  >
                    Close Account 
                  </button>
          </div>
        );
      default:
        return (
          <div className={styles.content}>
            <h2 className={styles.heading}>{activeSection}</h2>
            <p className={styles.description}>Content for {activeSection}</p>
          </div>
        );
    }
  };

  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.profileInfo}>
          <div className={styles.profilePhoto}>
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.profileName}>{userDetails?.name}</div>
        </div>
        {sections.map((section) =>
          section.link ? (
            <a
              key={section.name}
              href={section.link}
              className={`${styles.navButton} ${
                activeSection === section.name ? styles.active : ''
              }`}
            >
              {section.name}
            </a>
          ) : (
            <button
              key={section.name}
              className={`${styles.navButton} ${
                activeSection === section.name ? styles.active : ''
              }`}
              onClick={() => setActiveSection(section.name)}
            >
              {section.name}
            </button>
          )
        )}
      </aside>
      <main className={styles.mainContent}>
        {renderContent()}
      </main>
    </div>
  );
};

export default ProfilePage;
