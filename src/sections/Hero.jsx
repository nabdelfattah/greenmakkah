import React, { useState } from "react";
import styles from "./Hero.module.scss";
import { heroImgs } from "../data";

export default function Hero() {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <section className={styles.sectionHero}>
      <div className={styles.bgWrapper}>
        {heroImgs.map((obj) => {
          return (
            <picture key={obj.alt} className={styles.heroPic}>
              <source srcSet={obj.imgWebp} type="image/webp" />
              <img src={obj.img} alt={obj.alt} className={styles.heroImg} />
            </picture>
          );
        })}
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
      </div>
    </section>
  );
}
