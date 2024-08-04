import styles from "./SubNav.module.scss";
import navImg from "../assets/images/nav1.png";
import { useElementOnScreen } from "../useElementOnScreen";

export default function MediaSubNav({ leftArrow }) {
  const [isVisible, observedElRef] = useElementOnScreen({ threshold: 0 });
  return (
    <nav
      ref={observedElRef}
      className={`${styles.subNav} ${isVisible && styles.showNav}`}
    >
      <ul className={`${styles.subNavList} ${styles.mediaSubNavList}`}>
        <li className={styles.mediaImgWrapper}>
          <img
            className={styles.subNavImg}
            src={navImg}
            alt="an image of buildings"
          />
          <ul className={styles.mediaImgLinks}>
            <li>
              <a
                className={styles.subNavLink}
                href="https://gisportal.syadtech.com/greenmakkah/news"
              >
                <p>
                  <span className={styles.title}>الأخبار</span>
                  {leftArrow}
                </p>
                <p className={styles.description}>
                  آخر أخبار أخضر مكة و متابعة للمستجدات الجارية في المنطقة
                </p>
              </a>
            </li>
            <li>
              <a
                className={styles.subNavLink}
                href="https://gisportal.syadtech.com/greenmakkah/events"
              >
                <p>
                  <span className={styles.title}>الأحدات و الفعاليات</span>
                  {leftArrow}
                </p>
                <p className={styles.description}>
                  متابعة لآخر الأحداث و الفعاليات التي تنظمها الهيئه
                </p>
              </a>
            </li>
            <li>
              <a
                className={styles.subNavLink}
                href="https://gisportal.syadtech.com/greenmakkah/photoGallery"
              >
                <p>
                  <span className={styles.title}>معرض الصور</span>
                  {leftArrow}
                </p>
                <p className={styles.description}>
                  استعرض الصور الخاصة بمبادرة أخضر مكة لرؤية ما تم من أعمال
                </p>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/logo"
          >
            <p>
              <span className={styles.title}>تحميل الشعارات</span>
              {leftArrow}
            </p>
            <p className={styles.description}>
              يمكنك تحميل شعارات المبادرة و الهيئة من هنا بطريقة مباشرة
            </p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
