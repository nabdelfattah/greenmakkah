import styles from "./SubNav.module.scss";
import { PreviousNavBtn, NextNavBtn } from "./";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

export default function GuideSubNav({ leftArrow }) {
  const [btnState, setBtnState] = useState({ prev: false, next: true });

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
    <nav className={`${styles.subNav} ${styles.guideSubNav}`}>
      <Swiper
        navigation={{
          nextEl: "nextBtn",
          prevEl: "prevBtn",
        }}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={"3"}
      >
        <PreviousNavBtn btnState={btnState} btnManager={btnManager} />
        <SwiperSlide>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/4/climbers"
          >
            <p className={styles.title}>المتسلقات</p>
            <p className={styles.description}>
              تعرف على أنواع المتسلقات المتوفرة
            </p>
            <p className={styles.seeMore}>الأكثر انتشارا</p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/5/greens"
          >
            <p className={styles.title}>المساحات الخضراء</p>
            <p className={styles.description}>
              تعرف علي انواع المساحات الخضراء المتوفرة
            </p>
            <p className={styles.seeMore}>الأكثر انتشارا</p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/6/shrubClimber"
          >
            <p className={styles.title}>شجيرة + متسلقات</p>
            <p className={styles.description}>
              تعرف علي انواع شجيرة + متسلقات المتوفرة{" "}
            </p>
            <p className={styles.seeMore}>الأكثر انتشارا</p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/7/soilClimber"
          >
            <p className={styles.title}>مغطيات التربة + متسلقات</p>
            <p className={styles.description}>
              تعرف علي انواع مغطيات التربة + متسلقات المتوفرة
            </p>
            <p className={styles.seeMore}>الأكثر انتشارا</p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/1/trees"
          >
            <p className={styles.title}>الأشجار</p>
            <p className={styles.description}>
              تعرف علي انواع الاشجار المتوفرة{" "}
            </p>
            <p className={styles.seeMore}>الأكثر انتشارا</p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/2/Shrubbery"
          >
            <p className={styles.title}>الشجيرات </p>
            <p className={styles.description}>
              تعرف علي انواع الشجيرات المتوفرة
            </p>
            <p className={styles.seeMore}>الأكثر انتشارا</p>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className={styles.subNavLink}
            href="https://gisportal.syadtech.com/greenmakkah/3/SoilCover"
          >
            <p className={styles.title}>مغطيات التربة</p>
            <p className={styles.description}>
              تعرف علي انواع مغطيات التربة المتوفرة
            </p>
            <p className={styles.seeMore}>الأكثر انتشارا</p>
          </a>
        </SwiperSlide>
        <NextNavBtn btnState={btnState} btnManager={btnManager} />
      </Swiper>
    </nav>
  );
}
