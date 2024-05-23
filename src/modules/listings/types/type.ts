type NewsParams = {
  searchTerm: string;
  pageNo: number;
  pageSize: number;
};

export type NewsQueryParams = [string, NewsParams];

export type NewsCardDetails = {
  source: string;
  author: string;
  publishedAt: string;
  title: string;
  description: string;
  urlToImage: string;
};

export type NewsDetails = NewsCardDetails & {
  url: string;
  content: string;
};

export type NewsResponse = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};
