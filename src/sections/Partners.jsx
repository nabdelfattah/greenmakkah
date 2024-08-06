import styles from "./Partners.module.scss";
import { partners } from "../data";
import larrow from "../assets/icons/arrow-left.svg";
import rarrow from "../assets/icons/arrow-right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Partners() {
  return (
    <section className={styles.sectionPartners}>
      <header className={styles.header}>
        <h2 className={styles.heading}>شركاء المبادرة</h2>
        <hr className={styles.headingLine} />
      </header>
      <div className={styles.partnersWrapper}>
        <div className={styles.partners}>
          <button
            id="partnerPrevBtn"
            role="button"
            className={`${styles.prevBtn} swiper-button-prev`}
          >
            <img src={rarrow} alt="right arrow" />
          </button>
          <Swiper
            dir="rtl"
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: "#partnerPrevBtn",
              prevEl: "#partnerNextBtn",
            }}
            spaceBetween={0}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              481: { slidesPerView: 2, spaceBetween: 0, slidesPerGroup: 2 },
              601: { slidesPerView: 3, spaceBetween: 0, slidesPerGroup: 3 },
              993: { slidesPerView: 6, spaceBetween: 0, slidesPerGroup: 6 },
            }}
            loop
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
          >
            {partners.map((obj) => {
              return (
                <SwiperSlide key={obj.name}>
                  <figure className={`${styles.partner}`}>
                    <img src={obj.img} alt={obj.name} />
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            id="partnerNextBtn"
            role="button"
            className={`${styles.nextBtn} swiper-button-next`}
          >
            <img src={larrow} alt="left arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
