import React, { useState } from "react";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel1111@gmail.com",
    address: "Kingston, 5236, United States",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSaveChanges = () => {
    console.log("Profile updated:", profile);
  };

  const handleCancel = () => {
    console.log("Changes canceled");
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h4>Manage My Account</h4>
        <ul>
          <li className={styles.active}>My Profile</li>
          <li>My Payment Options</li>
          <li>Payment History</li>
        </ul>
        <h4>My Orders</h4>
        <ul>
          <li>My Returns</li>
          <li>My Cancellations</li>
        </ul>
        <h4>My Wishlist</h4>
        <h4>My Purchases</h4>
      </div>

      <div className={styles.content}>
        <p className={styles.breadcrumb}>
          Home / <span>My Account</span>
        </p>
        <h1>Welcome! </h1>
        <h1 className={styles.name}>{`${profile.firstName}`}</h1>
        <div className={styles.formContainer}>
          <h2>Edit Your Profile</h2>
          <div className={styles.profileImage}>
            <img
              src="src/assets/Profile.png"
              alt="Profile"
              className={styles.image}
            />
            <button className={styles.changePhoto}>Change Photo</button>
          </div>
          <form>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  placeholder="Enter you name"
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  placeholder="Enter last name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                placeholder="Enter email address"
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                placeholder="Enter your address"
                onChange={handleChange}
              />
            </div>
            </div>

            <h3 className={styles.password}>Password Changes</h3>
            <div className={`${styles.inputGroup} ${styles.passEdit}`}>
              {/* <label>Current Password</label> */}
              <input
                type="password"
                name="currentPassword"
                value={profile.currentPassword}
                placeholder="Current Password"
                onChange={handleChange}
              />
            </div>
            
              <div className={`${styles.inputGroup} ${styles.passEdit}`}>
                {/* <label>New Password</label> */}
                <input
                  type="password"
                  name="newPassword"
                  value={profile.newPassword}
                  placeholder="New Password"
                  onChange={handleChange}
                />
              </div>
              <div className={`${styles.inputGroup} ${styles.passEdit}`}>
                {/* <label>Confirm New Password</label> */}
                <input
                  type="password"
                  name="confirmNewPassword"
                  value={profile.confirmNewPassword}
                  placeholder="Confirm New Password"
                  onChange={handleChange}
                />
              </div>
            <div className={styles.buttonGroup}>
              <button type="button" className={styles.cancel} onClick={handleCancel}>
                Cancel
              </button>
              <button
                type="button"
                className={styles.saveChanges}
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
