import styles from "./Events.module.scss";
import rightArrow from "../assets/icons/arrow-right-circle.png";
import leftArrow from "../assets/icons/arrow-left-circle.png";
import { events } from "../data";
import { useElementOnScreen } from "../useElementOnScreen";
import { useState } from "react";

export default function Events() {
  // Animation
  const [isImgVisible, observedImgRef] = useElementOnScreen();
  const [isTextVisible, observedTextRef] = useElementOnScreen();
  const [isSmImgVisible, observedSmImgRef] = useElementOnScreen();

  const [eventIndex, setEventIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  function previousBtnHandler() {
    setEventIndex((index) => {
      if (index == 0) return events.length - 1;
      return index - 1;
    });
    setNextIndex((index) => {
      if (index == 0) return events.length - 1;
      return index - 1;
    });
    return;
  }
  function nextBtnHandler() {
    setEventIndex((index) => {
      if (index == events.length - 1) return 0;
      return index + 1;
    });
    setNextIndex((index) => {
      if (index == events.length - 1) return 0;
      return index + 1;
    });
    return;
  }

  return (
    <section className={styles.sectionEvents}>
      <div className={styles.events}>
        <header className={styles.header}>
          <h2 className={styles.heading}>الفعاليات والأحداث</h2>
        </header>
        <div className={styles.grid}>
          <div
            ref={observedTextRef}
            className={`${styles.txtWrapper} ${isTextVisible && "show"}`}
          >
            {events.map((obj) => {
              return (
                <div
                  className={styles.txtSwiper}
                  key={obj.alt}
                  style={{ translate: `${100 * eventIndex}%` }}
                >
                  <p className={styles.title}>{obj.title}</p>
                  <p className={styles.description}>{obj.description}</p>
                  <a href={obj.url} className={styles.details}>
                    اكتشف المزيد
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
                  </a>
                </div>
              );
            })}
          </div>
          <div
            className={`${styles.imgWrapper} ${isImgVisible && "show"}`}
            ref={observedImgRef}
          >
            {events.map((obj) => {
              return (
                <picture
                  className={styles.imgSwiper}
                  key={obj.alt}
                  style={{ translate: `${100 * eventIndex}%` }}
                >
                  <source srcSet={obj.imgWebp} type="image/webp" />
                  <img className={styles.img} src={obj.img} alt={obj.alt} />
                </picture>
              );
            })}
          </div>

          <div className={styles.btnsWrapper}>
            <div className={styles.btns}>
              <button aria-label="move to the left" onClick={nextBtnHandler}>
                <img src={leftArrow} alt="icon of left arrow" />
              </button>
              <button
                aria-label="move to the right"
                onClick={previousBtnHandler}
              >
                <img src={rightArrow} alt="icon of right arrow" />
              </button>
            </div>
            <div
              ref={observedSmImgRef}
              className={`${styles.imgWrapperSm} ${isSmImgVisible && "show"}`}
            >
              {events.map((obj, index) => {
                return (
                  <picture
                    key={obj.alt}
                    className={styles.imgSwiperSm}
                    style={{ translate: `${100 * eventIndex}%` }}
                  >
                    <source
                      srcSet={events[nextIndex].imgWebp}
                      type="image/webp"
                    />
                    <img
                      className={styles.imgSm}
                      src={events[nextIndex].img}
                      alt={events[nextIndex].alt}
                    />
                  </picture>
                );
              })}
            </div>
          </div>
        </div>
        <a
          href="https://gisportal.syadtech.com/greenmakkah/events"
          className={styles.seeMore}
        >
          استعرض جميع الفعاليات{" "}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-left"
            className={styles.icon}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
}
