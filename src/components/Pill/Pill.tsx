// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";

// icons
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

// styles
import styles from "./pill.module.scss";

const INFO_TOOLTIP_STYLE = {
  color: "#343243",
  backgroundColor: "#eaeaeb",
  borderRadius: "0.5rem",
  zIndex: 99999,
  boxShadow:
    "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 1px 3px rgba(48, 49, 51, 0.1)",
};

interface Props {
  pillText: string;
  tooltipText: string;
}

export default function Pill(props: Props) {
  const { pillText, tooltipText } = props;

  return (
    <div className={styles.pillContainer} data-tooltip-id={pillText}>
      <div className={styles.pillWrapper}>
        <p>{pillText}</p>

        {tooltipText && (
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={tooltipText}
            className={styles.infoIcon}
          >
            <FontAwesomeIcon icon={faCircleInfo} color="#0169FF" size="xs" />
          </div>
        )}
      </div>
      {tooltipText && (
        <Tooltip
          id="my-tooltip"
          place="bottom"
          opacity="2"
          style={{ ...INFO_TOOLTIP_STYLE, maxWidth: "100%" }}
        />
      )}
    </div>
  );
}
