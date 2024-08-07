import styles from "./NewsFeed.module.scss";
import { newsFeed } from "../data";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useElementOnScreen } from "../useElementOnScreen";

export default function NewsFeed() {
  const [isImgVisible, observedImgRef] = useElementOnScreen();

  return (
    <section className={styles.sectionNewsFeeds}>
      <header className={styles.header}>
        <h2 className={styles.heading}>الأخبار</h2>
      </header>
      <div className={styles.newsWrapper}>
        <Swiper
          dir="rtl"
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{
            nextEl: "#newsPrevBtn",
            prevEl: "#newsNextBtn",
          }}
          pagination={{
            type: "fraction",
          }}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
        >
          {newsFeed.map((obj) => (
            <SwiperSlide key={obj.alt}>
              <article className={styles.news}>
                <picture
                  ref={observedImgRef}
                  className={`${styles.imgWrapper} ${isImgVisible && "show"}`}
                >
                  <source srcSet={obj.imgWebp} type="image/webp" />
                  <img className={styles.img} src={obj.img} alt={obj.alt} />
                </picture>
                <div className={styles.txtWrapper}>
                  <p className={styles.subHeading}>المستجدات</p>
                  <p className={styles.title}>{obj.title}</p>
                  <p className={styles.description}>{obj.description}</p>
                  <a href={obj.url} className={styles.detailsLink}>
                    التفاصيل
                    <svg
                      className={styles.icon}
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="angle-left"
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
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.btnsWrapper}>
          <button id="newsPrevBtn">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right"
              className={styles.icon}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-role="none"
            >
              <path
                fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              ></path>
            </svg>
          </button>
          <button id="newsNextBtn">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-left"
              className={styles.icon}
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-role="none"
            >
              <path
                fill="currentColor"
                d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <a className={styles.seeMore}>
        استعرض جميع الأخبار
        <svg
          className={styles.icon}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-left"
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
    </section>
  );
}
