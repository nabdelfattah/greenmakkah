import styles from "./NewsLine.module.scss";
import { newsTxt } from "../data";

export default function NewsLine() {
  console.log(newsTxt);
  return (
    <section className={styles.sectionNewsLine}>
      <ul className={styles.newsList}>
        {newsTxt.map((item) => {
          return (
            <li key={item.txt} className={styles.newsItem}>
              <a href={item.link} className={styles.newsLink}>
                {item.txt}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
