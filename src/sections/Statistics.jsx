import styles from "./Statistics.module.scss";
import { statistics } from "../data";
import { StatItem } from "../components";
import { useEffect, useRef, useState } from "react";

export default function Statistics() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const items = [];
    statistics.forEach((obj, index) => {
      items.push(
        <li key={obj.type}>
          <StatItem dataObj={obj} index={index} />
        </li>
      );
    });
    setListItems(items);
  }, [statistics]);

  const elementRef = useRef();

  return (
    <section className={styles.sectionStatistics}>
      <div className={styles.statWrapper}>
        <ul className={styles.statList} ref={elementRef}>
          {listItems}
        </ul>
      </div>
    </section>
  );
}
