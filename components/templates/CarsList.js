import { useRouter } from "next/router";
import styles from "./CarsList.module.css";

// icon
import Back from "../icons/Back";

// (module)
import Card from "../modules/Card";

function CarsList({ data }) {
  const router = useRouter();
  const backHandler = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <p>بازگشت</p>
        <Back />
      </div>
      <div className={styles.cards}>
        {data.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
