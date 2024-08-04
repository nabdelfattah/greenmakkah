import styles from "./Hero.module.scss";
import { heroImgs } from "../data";
import btn from "../assets/icons/video.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Hero() {
  return (
    <section className={`${styles.sectionHero} sectionHero`}>
      <div className={styles.bgWrapper}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {heroImgs.map((obj) => {
            return (
              <SwiperSlide key={obj.alt}>
                <picture className={styles.heroPic}>
                  <source srcSet={obj.imgWebp} type="image/webp" />
                  <img src={obj.img} alt={obj.alt} className={styles.heroImg} />
                </picture>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.txtWrapper}>
        <p className={styles.welcom}>مرحبا بكم في</p>
        <h1 className={styles.heading}>بوابة اخضر مكة</h1>
        <p className={styles.txt}>ضمن مبادرة السعودية الخضراء</p>
        <p className={styles.txt}>
          لتحقيق رؤية المملكة 2030 والتى ترسخ توجه المملكة والمنطقة فى حماية
          الأرض والطبيعة ووضعها فى خارطة طريق ذات معالم واضحة وطموحة تسهم بشكل
          قوي فى تحقيق بيئة مستدامة
        </p>
        <div className={styles.videoWrapper}>
          <img src={btn} alt="play video icon" />
          <p>شاهد الفيديو</p>
        </div>
      </div>
    </section>
  );
}
