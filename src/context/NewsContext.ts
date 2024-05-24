import { Dispatch, SetStateAction, createContext } from "react";
import { NewsDetails } from "../modules/listings/types/type";

type NewsContextType = {
  newsCardDetails: NewsDetails | null;
  setNewsCardDetails: Dispatch<SetStateAction<NewsDetails | null>>;
};

const NewsContext = createContext<NewsContextType>({
  newsCardDetails: null,
  setNewsCardDetails: () => {},
});

export default NewsContext;
