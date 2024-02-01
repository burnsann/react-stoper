import styles from './FormattedTime.module.scss';

const FormattedTime = ({ stopwatch }) => {

  const formatTime = milliseconds => {
    const padZero = (num) => (num < 10 ? `0${num}` : num);
    const pad2Zero = (num) => (num < 100 ? `0${num}` : num);
    
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const remainingMilliseconds = milliseconds % 1000;
  
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${pad2Zero(padZero(Math.floor(remainingMilliseconds)))}`;
  };

  return (
    <div>
      <h1 className={styles.header}>Stopwatch</h1>
      <div className={styles.time}>{formatTime(stopwatch)}</div>
    </div>
  );
};

export default FormattedTime;