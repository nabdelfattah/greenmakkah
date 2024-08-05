import styles from "./MobileApp.module.scss";
import phoneWebp from "../assets/images/phone.webp";
import phonePng from "../assets/images/phone.png";
import googlePlay from "../assets/icons/google-play.png";
import { useElementOnScreen } from "../useElementOnScreen";

export default function MobileApp() {
  const [isPicVisible, observedPicRef] = useElementOnScreen();
  const [isTxtVisible, observedTxtRef] = useElementOnScreen();
  return (
    <section className={styles.sectionApp}>
      <div className={styles.grid}>
        <picture
          className={`${styles.imgWrapper} ${isPicVisible && "show"}`}
          ref={observedPicRef}
        >
          <source srcSet={phoneWebp} type="image/webp" />
          <img src={phonePng} className={styles.img} />
        </picture>
        <div
          className={`${styles.textWrapper} ${isTxtVisible && "show"}`}
          ref={observedTxtRef}
        >
          <header className={styles.header}>
            <h2 className={styles.heading}>تطبيق أخضر مكة</h2>
            <hr className={styles.headingLine} />
          </header>
          <p>
            يوفر مستكشف أخضر مكة علي الجوال ﻟﻠﻤﻮاﻃﻨﻴﻦ واﻟﻤﺴﺘﺨﺪﻣﻴﻦ البحث عن
            الأماكن الخضراء المتاحة في قاعدة البيانات الجغرافية
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.green.Makkah"
            aria-label="Download from App store"
          >
            <img src={googlePlay} alt="google play store" />
          </a>
        </div>
      </div>
    </section>
  );
}
