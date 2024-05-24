import { useContext } from "react";

// components
import ImageWithFallback from "../image-with-fallback/ImageWithFallback";
import Pill from "../Pill/Pill";
import Button from "../button/Button";

// context
import NewsContext from "../../context/NewsContext";

// utils
import { formatDateString, openUrlInNewTab } from "../../helper/util";

// types
import { NewsDetails } from "../../modules/listings/types/type";

// styles
import styles from "./details.module.scss";

const Details = () => {
  const { newsCardDetails } = useContext(NewsContext);

  if (!newsCardDetails) {
    return <h1>No Details</h1>;
  }

  const {
    source,
    author,
    publishedAt,
    title,
    description,
    content,
    url,
    urlToImage,
  } = newsCardDetails as NewsDetails;

  const formattedPublishedDate = formatDateString(publishedAt);

  return (
    <section className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <ImageWithFallback src={urlToImage} alt={author} variant="card" />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.pillWrapper}>
          <div className={styles.pillSection}>
            <Pill pillText="Source" tooltipText={source} />
            <Pill pillText="Author" tooltipText={author} />
            <Pill
              pillText="Published At"
              tooltipText={formattedPublishedDate}
            />
          </div>
        </div>
        <div className={styles.detailsSection}>
          <p className={`${styles.cardTitle} fw600`} title={title}>
            {title}
          </p>
          <p className={styles.description} title={description}>
            {description}
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
      <div className={styles.readMoreSection}>
        <div className={styles.divider} />
        <Button
          text="Read More"
          type="dark"
          handleClick={() => {
            openUrlInNewTab(url);
          }}
        />
      </div>
    </section>
  );
};

export default Details;
