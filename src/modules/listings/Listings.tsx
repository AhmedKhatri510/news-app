import { useState } from "react";

// components
import NewsCard from "./news-card/NewsCard";
import Loading from "../../components/loading/Loading";
import ResponsivePagination from "react-responsive-pagination";
import { Link } from "react-router-dom";
import SearchBar from "../../components/search-bar/SearchBar";

// hook
import { useQuery } from "@tanstack/react-query";
import useDebounce from "../../hooks/useDebounce";

// types
import { NewsCardDetails, NewsResponse } from "./types/type";

// helper
import { fetchNews } from "./api/fetchNews";

// styles
import styles from "./listings.module.scss";
import "../listings/pagination/pagination.scss";

const Listings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("India");
  const debouncedInputValue = useDebounce(searchTerm, 500);

  const pageSize = 20;

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: [
      "listings",
      { searchTerm: debouncedInputValue, pageNo: currentPage, pageSize },
    ],
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

  const errorElement = (errorMessage: string) => (
    <>
      <h2>{errorMessage}</h2>
      <p>
        <Link to="/">
          <a
            onClick={() => {
              setCurrentPage(1);
              setSearchTerm("India");
            }}
          >
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
      <SearchBar input={searchTerm} setInput={setSearchTerm} />
      {isLoading && <Loading />}
      {isError && errorElement(error.message)}
      {isSuccess && !news.length && errorElement("No Result Found!")}
      {isSuccess && news.length > 0 && (
        <>
          <div className={styles.cardContainer}>{news}</div>
          <div>
            <ResponsivePagination
              total={totalPages}
              current={currentPage}
              onPageChange={(page) => handlePageChange(page)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Listings;
