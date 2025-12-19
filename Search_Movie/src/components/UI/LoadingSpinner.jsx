import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <>
      <div className="min-h-[calc(100dvh-64px)] flex items-center justify-center">
        <div className={styles["three-body"]}>
          <div className={styles["three-body__dot"]}></div>
          <div className={styles["three-body__dot"]}></div>
          <div className={styles["three-body__dot"]}></div>
        </div>
      </div>
    </>
  );
}

export default LoadingSpinner;
