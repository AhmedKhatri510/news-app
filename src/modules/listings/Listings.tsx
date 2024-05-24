import { useState } from "react";

// components
import NewsCard from "./news-card/NewsCard";
import Loading from "../../components/loading/Loading";
import ResponsivePagination from "react-responsive-pagination";

// hook
import { useQuery } from "@tanstack/react-query";

// types
import { NewsCardDetails, NewsResponse } from "./types/type";

// helper
import { fetchNews } from "./api/fetchNews";

// styles
import styles from "./listings.module.scss";
import "../listings/pagination/pagination.scss";
import { Link } from "react-router-dom";

const Listings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const searchTerm = "India";
  const pageSize = 20;

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["listings", { searchTerm, pageNo: currentPage, pageSize }],
    queryFn: fetchNews,
  });

  const news = data?.articles?.map((item: NewsResponse, index: number) => {
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

    return <NewsCard key={index} newsCardDetails={newsDetail} />;
  });

  const totalPages = data?.totalResults ?? 0;

  const errorElement = (
    <>
      <h2>{error?.message}</h2>
      <p>
        <Link to="/">
          <a onClick={() => setCurrentPage(1)}>
            Click here to go back to Listings Page
          </a>
        </Link>
      </p>
    </>
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.listingsContainer}>
      {isLoading && <Loading />}
      {isError && errorElement}
      <div className={styles.cardContainer}>{isSuccess && news}</div>
      {isSuccess && (
        <div>
          <ResponsivePagination
            total={totalPages}
            current={currentPage}
            onPageChange={(page) => handlePageChange(page)}
          />
        </div>
      )}
    </div>
  );
};

export default Listings;
