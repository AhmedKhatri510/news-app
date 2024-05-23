// components
import NewsCard from "./news-card/NewsCard";
import Loading from "../../components/loading/Loading";

// hook
import { useQuery } from "@tanstack/react-query";

// types
import { NewsCardDetails, NewsResponse } from "./types/type";

// helper
import { fetchNews } from "./api/fetchNews";

// styles
import styles from "./listings.module.scss";

const Listings = () => {
  const searchTerm = "India";

  const pageNo = 1;
  const pageSize = 20;

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["listings", { searchTerm, pageNo, pageSize }],
    queryFn: fetchNews,
  });

  const news = data?.articles?.map((item: NewsResponse) => {
    const newsDetail: NewsCardDetails = {
      source: "",
      author: "",
      publishedAt: "",
      title: "",
      description: "",
      urlToImage: "",
    };
    newsDetail.source = item.source.name;
    newsDetail.author = item.author;
    newsDetail.publishedAt = item.publishedAt;
    newsDetail.title = item.title;
    newsDetail.description = item.description;
    newsDetail.urlToImage = item.urlToImage;

    return <NewsCard newsCardDetails={newsDetail} />;
  });

  return (
    <div className={styles.listingsContainer}>
      {isLoading && <Loading />}
      <div className={styles.cardContainer}>
        {isError && <>{error.message}</>}
        {isSuccess && news}
      </div>
    </div>
  );
};

export default Listings;
