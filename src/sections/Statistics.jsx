import styles from "./Statistics.module.scss";
import { statistics } from "../data";
import {} from "../useElementOnScreen";
import StatItem from "../components/StatItem";

export default function Statistics() {
  return (
    <section className={styles.sectionStatistics}>
      <ul className={styles.statList}>
        {statistics.map((obj, index) => (
          <li key={obj.type}>
            <StatItem dataObj={obj} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
}
