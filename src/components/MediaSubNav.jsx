import styles from "./SubNav.module.scss";
import navImg from "../assets/images/nav1.png";

export default function MediaSubNav({ leftArrow }) {
  return (
    <nav className={styles.subNav}>
      <img
        className={styles.subNavImg}
        src={navImg}
        alt="an image of buildings"
      />
      <ul className={`${styles.subNavList} ${styles.mediaSubNavList}`}>
        <div>
          <li>
            <a
              className={styles.subNavLink}
              href="https://gisportal.syadtech.com/greenmakkah/news"
            >
              <p>
                <span className={styles.title}>الأخبار</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-left"
                  className={styles.icon}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                  ></path>
                </svg>
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
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-left"
                  className={styles.icon}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                  ></path>
                </svg>
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
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="angle-left"
                  className={styles.icon}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path
                    fill="currentColor"
                    d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                  ></path>
                </svg>
              </p>
              <p className={styles.description}>
                استعرض الصور الخاصة بمبادرة أخضر مكة لرؤية ما تم من أعمال
              </p>
            </a>
          </li>
        </div>
        <li>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/logo"
          >
            <p>
              <span className={styles.title}>تحميل الشعارات</span>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="angle-left"
                className={styles.icon}
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
              >
                <path
                  fill="currentColor"
                  d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"
                ></path>
              </svg>
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
