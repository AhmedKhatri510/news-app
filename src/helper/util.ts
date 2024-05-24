export function formatDateString(inputDateString: string): string {
  const date = new Date(inputDateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return date.toLocaleString("en-US", options);
}

export const openUrlInNewTab = (url: string): void => {
  window.open(url, "_blank");
};
