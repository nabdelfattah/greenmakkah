import styles from "./SubNav.module.scss";
import greenLogo from "../assets/icons/mrda-green.png";
import { useElementOnScreen } from "../useElementOnScreen";

export default function AboutSubNav({ leftArrow }) {
  const [isVisible, observedElRef] = useElementOnScreen({ threshold: 0 });
  return (
    <nav
      ref={observedElRef}
      className={`${styles.subNav} ${isVisible && styles.showNav}`}
    >
      <img
        className={styles.subNavImg}
        src={greenLogo}
        alt="Al madinah region development authority"
      />
      <ul className={styles.subNavList}>
        <li>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/vision"
          >
            <p>
              <span className={styles.title}>الرؤية</span>
              {leftArrow}
            </p>
            <p className={styles.description}>
              مشروع أخضر مكة هو ضمن مبادرة السعودية الخضراء ضمن مخرجات رؤية
              المملكة 2023
            </p>
          </a>
        </li>
        <li>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/goals"
          >
            <p>
              <span className={styles.title}>الأهداف</span>
              {leftArrow}
            </p>
            <p className={styles.description}>
              الأهداف العامة و التسويقية لمبادرة أخضر مكة
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
