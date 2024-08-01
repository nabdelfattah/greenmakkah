import styles from "./Partners.module.scss";
import { partners } from "../data";
import larrow from "../assets/icons/arrow-left.svg";
import rarrow from "../assets/icons/arrow-right.svg";

export default function Partners() {
  function rightShiftHandler() {
    return;
  }
  function leftShiftHandler() {
    return;
  }
  return (
    <section className={styles.sectionPartners}>
      <header className={styles.header}>
        <h2 className={styles.heading}>شركاء المبادرة</h2>
        <hr className={styles.headingLine} />
      </header>
      <div className={styles.partnersWrapper}>
        <div className={styles.arrows}>
          <button role="button" onClick={rightShiftHandler}>
            <img src={rarrow} alt="right arrow" />
          </button>
          <button role="button" onClick={leftShiftHandler}>
            <img src={larrow} alt="left arrow" />
          </button>
        </div>
        <ul className={styles.partners}>
          {partners.map((obj) => (
            <li key={obj.name} className={styles.partner}>
              <img src={obj.img} alt={obj.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
