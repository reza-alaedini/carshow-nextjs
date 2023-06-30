import styles from "./CarDetails.module.css";

// icons
import Location from "../icons/Location";
import Company from "../icons/Company";
import Model from "../icons/Model";
import Calender from "../icons/Calender";
import Road from "../icons/Road";
import Money from "../icons/Money";

// separator
import { separate } from "../modules/Card";

function CarDetails(props) {
  const {
    id,
    image,
    name,
    model,
    year,
    distance,
    price,
    location,
    description,
  } = props;

  return (
    <div className={styles.container}>
      <img src={image} />
      <p className={styles.header}>
        {name} {model}
      </p>

      <div className={styles.details}>
        <div>
          <Company />
          <p>کمپانی</p>
          <span>{name}</span>
        </div>
        <div>
          <Model />
          <p>مدل</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender />
          <p>سال ساخت</p>
          <span>{year}</span>
        </div>
        <div>
          <Road />
          <p>کارکرد</p>
          <span>{separate(distance)}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>لوکیشن</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <h4 className={styles.descriptionTitle}>اطلاعات بیشتر</h4>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>قیمت</p>
          <span>{separate(price * 50000)}&nbsp; تومان</span>
        </div>
      </div>
      <button className={styles.button}>خرید</button>
    </div>
  );
}

export default CarDetails;
