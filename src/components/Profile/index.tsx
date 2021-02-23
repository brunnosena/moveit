import React from 'react';
import styles from '../../styles/components/Profile.module.css'

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/brunnosena.png" alt="Alexandre Costa"/>
      <div>
        <strong>Brunno Sena</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon"/>
          Level 9999+
        </p>
      </div>
    </div>
  );
}

export default Profile;