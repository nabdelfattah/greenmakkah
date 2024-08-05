import { useEffect, useRef, useState } from "react";
import styles from "./StatItem.module.scss";

export default function StatItem({ dataObj, index }) {
  const [shouldShow, setShouldShow] = useState(false);
  const elementRef = useRef();
  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setTimeout(() => {
          setShouldShow(true);
        }, 300 * index); // delay between each StatItem
      }
    });
    observer.observe(element);
    return () => {
      observer.observe(element);
    };
  }, []);
  return (
    <figure
      className={`${styles.stat} ${shouldShow && styles.show}`}
      ref={elementRef}
    >
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
