import styles from "../components/Loading.module.css";
function Loading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;
