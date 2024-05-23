// components
import NewsCard from "../news-card/NewsCard";

// styles
import styles from "./listings.module.scss";

const Listings = () => {
  const news = new Array(20).fill({
    source: "Yahoo Entertainment",
    author: "Sarah Fielding",
    title:
      "Marvel's What If...? for Apple Vision Pro gets a trailer and release date",
    description:
      "Earlier this month, Marvel and ILM Immersive announced that What If...? would be coming to the Apple Vision Pro in the form of an \"immersive story\" based on the Disney+ original. The original announcement didn't offer much in the way of detail but now we've g…",
    urlToImage: null,
    publishedAt: "2024-05-22T15:00:08Z",
  });

  news[1] = {
    source: "sdfsdf Entertainment",
    author: " Fielding",
    title:
      "Marvel' If...? for Apple Vision Pro gets a trailer and release date",
    description:
      "Earlier this month, Marvel and ILM Immersive announced that What If...? would be coming to the Apple Vision Pro in the form of an \"immersive story\" based on the Disney+ original. The original announcement didn't offer much in the way of detail but now we've g…",
    urlToImage: null,
    publishedAt: "2024-06-22T15:12:08Z",
  };
  return (
    <div className={styles.cardContainer}>
      {news.map((item) => (
        <NewsCard newsCardDetails={item} />
      ))}
    </div>
  );
};

export default Listings;
