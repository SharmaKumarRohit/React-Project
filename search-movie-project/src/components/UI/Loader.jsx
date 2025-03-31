import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.loader_container}>
      <svg
        className={styles.loader}
        viewBox="0 0 384 384"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={styles.active}
          pathLength="360"
          fill="transparent"
          stroke-width="32"
          cx="192"
          cy="192"
          r="176"
        ></circle>
        <circle
          className={styles.track}
          pathLength="360"
          fill="transparent"
          stroke-width="32"
          cx="192"
          cy="192"
          r="176"
        ></circle>
      </svg>
    </div>
  );
}

export default Loader;
