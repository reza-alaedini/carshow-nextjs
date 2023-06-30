import Link from "next/link";
import styles from "./Card.module.css";

// icons
import Location from "./../icons/Location";

export function separate(Number) {
  Number += "";
  Number = Number.replace(",", "");
  let x = Number.split(".");
  let y = x[0];
  let z = x.length > 1 ? "." + x[1] : "";
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
}

function Card(props) {
  const { id, image, name, model, year, distance, price, location } = props;

  return (
    <Link href={`/cars/${id}`}>
      <div className={styles.container}>
        <img src={image} className={styles.image} />
        <h4 className={styles.title}>{`${name}  ${model}`}</h4>
        <p className={styles.detail}>{`${year} . ${distance}km`}</p>
        <div className={styles.footer}>
          <p className={styles.price}>{separate(price * 50000)} تومان</p>
          <div className={styles.location}>
            <Location />
            <p>{location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
