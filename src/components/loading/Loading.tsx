import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <FontAwesomeIcon
        data-testid="loading-spinner"
        icon={faSpinner}
        size="2x"
        color="#0169FF"
        spin
      />
    </div>
  );
};

export default Loading;
