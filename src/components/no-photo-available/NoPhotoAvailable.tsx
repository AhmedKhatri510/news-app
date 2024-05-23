// utils
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

// types
import styles from "./no-photo-available.module.scss";

export type NpaContainerVariant = "card";

interface Props {
  variant?: NpaContainerVariant;
}

export const NoPhotoAvailable = ({ variant }: Props) => {
  const styledVariant = {
    card: styles.card,
  };

  return (
    <div className={cn(styles.npaContainer, variant && styledVariant[variant])}>
      <FontAwesomeIcon icon={faCamera} />
      <p className="uppercase single-line">NO PHOTO AVAILABLE</p>
    </div>
  );
};
