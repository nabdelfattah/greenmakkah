import styles from "./Partners.module.scss";
import { partners } from "../data";
import larrow from "../assets/icons/arrow-left.svg";
import rarrow from "../assets/icons/arrow-right.svg";
import { useEffect, useState } from "react";
// import { useElementOnScreen } from "../useElementOnScreen";

export default function Partners() {
  const [partnerIndex, setPartnerIndex] = useState(0);
  // const [isVisible, observedElRef] = useElementOnScreen({ threshold: 0.1 });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      nextArrowHandler();
    }, 2000);
    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, [partnerIndex]);

  function previousArrowHandler() {
    setPartnerIndex((index) => {
      // in the beginning of list, return last index
      if (index == 0) return partners.length - 1;
      // return previous index
      return index - 1;
    });
  }
  function nextArrowHandler() {
    setPartnerIndex((index) => {
      // current index is last index, restart from 0
      if (index == partners.length - 1) return 0;
      // rerurn next index
      return index + 1;
    });
  }

  return (
    <section className={styles.sectionPartners}>
      <header className={styles.header}>
        <h2 className={styles.heading}>شركاء المبادرة</h2>
        <hr className={styles.headingLine} />
      </header>
      <div className={styles.partnersWrapper}>
        <div className={styles.arrows}>
          <button role="button" onClick={nextArrowHandler}>
            <img src={rarrow} alt="right arrow" />
          </button>
          <button role="button" onClick={previousArrowHandler}>
            <img src={larrow} alt="left arrow" />
          </button>
        </div>
        <ul className={styles.partners}>
          {partners.map((obj, index) => {
            let desiredIndex = [(index + partnerIndex) % partners.length];
            return (
              <li
                key={partners[desiredIndex].name}
                className={`${styles.partner}`}
              >
                <img
                  src={partners[desiredIndex].img}
                  alt={partners[desiredIndex].name}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
