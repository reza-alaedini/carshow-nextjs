import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const router = useRouter();

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("لطفاً حداقل و حداکثر قیمت را مشخص نمایید!");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="قیمت از"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="قیمت تا"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>جستجو</button>
    </div>
  );
}

export default SearchBar;
