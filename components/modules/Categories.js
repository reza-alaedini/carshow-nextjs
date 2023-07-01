import Link from "next/link";
import styles from "./Categories.module.css";

// icons
import Sedan from "../icons/Sedan";
import Suv from "../icons/Suv";
import Hatchback from "../icons/Hatchback";
import Sport from "../icons/Sport";

function Categories() {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan">
        <div>
          <p>سدان</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/suv">
        <div>
          <p>شاسی بلند</p>
          <Suv />
        </div>
      </Link>
      <Link href="/categories/hatchback">
        <div>
          <p>هاچبک</p>
          <Hatchback />
        </div>
      </Link>
      <Link href="/categories/sport">
        <div>
          <p>اسپرت</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
}

export default Categories;
