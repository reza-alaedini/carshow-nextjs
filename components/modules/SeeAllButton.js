import Link from "next/link";
import styles from "./SeeAllButton.module.css";

function SeeAllButton() {
  return (
    <div className={styles.container}>
      <Link href="/cars">مشاهده تمامی ماشین ها</Link>
    </div>
  );
}

export default SeeAllButton;
