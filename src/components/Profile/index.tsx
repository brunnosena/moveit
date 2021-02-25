import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext'
import styles from '../../styles/components/Profile.module.css'

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/brunnosena.png" alt="Brunno Sena"/>
      <div>
        <strong>Brunno Sena</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}

export default Profile;