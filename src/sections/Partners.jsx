import styles from "./Partners.module.scss";
import { partners } from "../data";
import larrow from "../assets/icons/arrow-left.svg";
import rarrow from "../assets/icons/arrow-right.svg";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { NextNavBtn, PreviousNavBtn } from "../components";
// import { useElementOnScreen } from "../useElementOnScreen";

export default function Partners() {
  // const [partnerIndex, setPartnerIndex] = useState(0);
  // const [isVisible, observedElRef] = useElementOnScreen({ threshold: 0.1 });

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     nextArrowHandler();
  //   }, 2000);
  //   return () => clearTimeout(timeoutId); // Cleanup on component unmount
  // }, [partnerIndex]);

  // function previousArrowHandler() {
  //   setPartnerIndex((index) => {
  //     // in the beginning of list, return last index
  //     if (index == 0) return partners.length - 1;
  //     // return previous index
  //     return index - 1;
  //   });
  // }
  // function nextArrowHandler() {
  //   setPartnerIndex((index) => {
  //     // current index is last index, restart from 0
  //     if (index == partners.length - 1) return 0;
  //     // rerurn next index
  //     return index + 1;
  //   });
  // }

  const [btnState, setBtnState] = useState({ prev: false, next: true });
  // const [isVisible, observedElRef] = useElementOnScreen({threshold: 0})

  function btnManager(type, currentIndex) {
    if (type == "next") {
      if (currentIndex < 4) {
        return setBtnState({ prev: true, next: true });
      }
      return setBtnState({ prev: true, next: false });
    } else {
      if (currentIndex > 0) {
        return setBtnState({ prev: true, next: true });
      } else {
        return setBtnState({ prev: false, next: true });
      }
    }
  }

  return (
    <section className={styles.sectionPartners}>
      <header className={styles.header}>
        <h2 className={styles.heading}>شركاء المبادرة</h2>
        <hr className={styles.headingLine} />
      </header>
      <div className={styles.partnersWrapper}>
        {/* <div className={styles.arrows}>
          <button role="button">
            <img src={rarrow} alt="right arrow" />
          </button>
          <button role="button">
            <img src={larrow} alt="left arrow" />
          </button>
        </div> */}
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
