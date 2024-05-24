import { Dispatch, SetStateAction } from "react";

// styles
import styles from "./search-bar.module.scss";

type Props = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ input, setInput }: Props) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.searchInput}
        type="text"
        value={input}
        placeholder="Search anything..."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
