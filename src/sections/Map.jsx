import styles from "./Map.module.scss";
import searchIcon from "../assets/icons/search.svg";
import { locations } from "../data";
import { useElementOnScreen } from "../useElementOnScreen";

export default function Map() {
  const [isVisible, observedElRef] = useElementOnScreen();
  function locationHandler(e) {
    e.preventDefault();
  }
  return (
    <section className={styles.sectionMap}>
      <header className={styles.header}>
        <h2 className={styles.heading}>اكتشف مكة المكرمة ومحافظتها</h2>
        <p className={styles.description}>
          يوفر مستكشف أخضر مكة للمواطنين و المستخدمين البحث عن الأماكن الخضراء
          المتاحة في قاعدة البيانات الجغرافية
        </p>
      </header>
      <div className={styles.mapWrapper}>
        {/* the real map goes here */}
        <form className={styles.form}>
          <div className={styles.inputOuterWapper}>
            <div className={styles.inputWapper}>
              <input type="text" placeholder="... البحث عن موقع" />
              <img
                className={styles.searchIcon}
                src={searchIcon}
                alt="search icon"
              />
            </div>
          </div>
          <div className={styles.btnsWrapper}>
            {locations.map((obj) => (
              <button
                ref={observedElRef}
                key={obj.name}
                className={`${styles.btn} ${isVisible && "show"}`}
                onClick={locationHandler}
              >
                <img src={obj.img} alt={obj.alt} className={styles.btnIcon} />
                <span className={styles.btnName}>{obj.name}</span>
              </button>
            ))}
          </div>
        </form>
        <p className={styles.mapCopyright}>
          جميع الحقوق محفوظة لهيئة تطوير منطقة مكة المكرمة @ ٢٠٢٢
        </p>
      </div>
      <p className={styles.seeMore}>
        لاستخدام مستكشف اخضر مكة
        <a
          className={styles.seeMoreLink}
          href="https://gisportal.syadtech.com/greenmakkah/explorer"
        >
          اضغط هنا
        </a>
      </p>
    </section>
  );
}
