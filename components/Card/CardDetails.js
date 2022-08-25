import styles from "../Card/CardDetails.module.css";

const CardDetails = ({ airDate, seriesName }) => {
  return (
    <div>
      <div className={styles.details}>
        <span>{airDate.slice(0, 4)} &nbsp;•&nbsp;</span>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.icon}
        >
          <path
            transform="scale(0.7)"
            d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
            fill="#FFFFFF"
          />
        </svg>
        <span>&nbsp; series</span>
      </div>
      <h2 className={styles.title}>{seriesName}</h2>
    </div>
  );
};

export default CardDetails;
