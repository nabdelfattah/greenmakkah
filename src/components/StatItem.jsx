import { useEffect, useState } from "react";
import styles from "./StatItem.module.scss";

export default function StatItem({ dataObj, index }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200 * index);
  }, []);
  return (
    <figure className={`${styles.stat} ${isVisible && styles.show}`}>
      <img className={styles.statImg} src={dataObj.img} alt={dataObj.alt} />
      <figcaption className={styles.caption}>
        <img
          className={styles.statIcon}
          src={dataObj.icon}
          alt={`icon of ${dataObj.type}`}
        />
        <p className={styles.statRecord}>{dataObj.record}</p>
        <p className={styles.statType}>{dataObj.type}</p>
      </figcaption>
    </figure>
  );
}
