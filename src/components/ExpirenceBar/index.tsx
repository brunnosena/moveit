import styles from '../../styles/components/ExpirenceBar.module.css';

const ExpirenceBar: React.FC = () => {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }}>
          <span className={styles.currentExperience} style={{left: '50%'}}>300xp</span>
        </div>
      </div>
      <span>600 px</span>
    </header>
  );
}

export default ExpirenceBar;