import React from 'react';

import styles from '../../styles/components/CompletedChallenges.module.css'

const CompletedChallenges: React.FC = () => {
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>99999999+</span>
    </div>
  );
}

export default CompletedChallenges;