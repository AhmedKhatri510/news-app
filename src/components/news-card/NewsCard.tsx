// components
import Pill from "../Pill/Pill";
import Button from "../button/Button";
import ImageWithFallback from "../image-with-fallback/ImageWithFallback";

// utils
import { formatDateString } from "../../helper/util";

// styles
import styles from "./news-card.module.scss";

type NewsCardDetail = {
  source: string;
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
};

type Props = {
  newsCardDetails: NewsCardDetail;
};

const NewsCard = ({ newsCardDetails }: Props) => {
  const { source, author, title, description, urlToImage, publishedAt } =
    newsCardDetails;

  const formattedPublishedDate = formatDateString(publishedAt);
  return (
    <section className={styles.newsCardContainer}>
      <section className={styles.newsDetailsSection}>
        <div className={styles.upperCard}>
          <div className={styles.upperCardTop}>
            <div className={styles.imageContainer}>
              {/* if photos data exists from listing, show that, otherwise display NoPhotoAvailable component */}
              <ImageWithFallback src={urlToImage} alt={author} variant="card" />
            </div>

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
          </div>

          <div className={styles.newsDetailsContainer}>
            <div className={styles.pillWrapperMobile}>
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
        </div>

        <div className={styles.viewMoreSection}>
          <div className={styles.divider} />
          <Button
            text="View More"
            type="dark"
            handleClick={() => console.log("view more!")}
          />
        </div>
      </section>
    </section>
  );
};

export default NewsCard;
