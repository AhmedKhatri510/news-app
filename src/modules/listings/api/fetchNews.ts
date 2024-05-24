import { QueryFunctionContext } from "@tanstack/react-query";
import { NewsQueryParams } from "../types/type";

export const fetchNews = async (
  queryParams: QueryFunctionContext<NewsQueryParams>
) => {
  const { searchTerm, pageNo, pageSize } = queryParams.queryKey[1];

  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }?q=${searchTerm}&page=${pageNo}&pageSize=${pageSize}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  );

  if (!response.ok)
    throw new Error(
      `Error fetching news for SearchTerm: ${searchTerm}, pageNo: ${pageNo}, pageSize: ${pageSize}`
    );

  return response.json();
};
