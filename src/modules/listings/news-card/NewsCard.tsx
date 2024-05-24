// components
import Pill from "../../../components/Pill/Pill";
import Button from "../../../components/button/Button";
import ImageWithFallback from "../../../components/image-with-fallback/ImageWithFallback";

// types
import { NewsDetails } from "../types/type";

// utils
import { formatDateString } from "../../../helper/util";

// styles
import styles from "./news-card.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import NewsContext from "../../../context/NewsContext";

type Props = {
  newsCardDetails: NewsDetails;
};

const NewsCard = ({ newsCardDetails }: Props) => {
  const { source, author, title, description, urlToImage, publishedAt } =
    newsCardDetails;
  const { setNewsCardDetails } = useContext(NewsContext);

  const navigate = useNavigate();

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
            handleClick={() => {
              setNewsCardDetails(newsCardDetails);
              navigate("/details");
            }}
          />
        </div>
      </section>
    </section>
  );
};

export default NewsCard;
