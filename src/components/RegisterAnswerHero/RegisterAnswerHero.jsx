import { useState, useEffect } from "react";
import styles from "./RegisterAnswerHero.module.css";

import bgPhoto1 from "../../assets/GDG-Community.png"
import bgPhoto2 from "../../assets/AIFest.png"
function RegisterAnswerHero() {
  let images = [
    {
      id: "slide_1",
      url: bgPhoto1,
      alt: "Background Photo ONE",
    },
    {
      id: "slide_2",
      url: bgPhoto2,
      alt: "Background Photo TWO",
    },
    {
      id: "slide_3",
      url: bgPhoto1,
      alt: "Background Photo THREE",
    },
    {
      id: "slide_4",
      url: bgPhoto2,
      alt: "Background Photo FOUR",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    if (!images.length) return;

    const id = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(id);
  }, [images.length, currentImage]);

  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        {images && images.length
          ? images.map((item, index) => (
              <img
                src={item.url}
                alt={item.alt}
                key={item.id}
                className={
                  currentImage === index
                    ? `${styles.heroImage}`
                    : `${styles.heroImage} ${styles.heroImageInactive}`
                }
              ></img>
            ))
          : null}
      </div>
      <div className={styles.details}>
        <div className={styles.text}>
          <h3 className={styles.subText}>
            There’s Always Something Happening at GDG ENSIA
          </h3>
          <h1 className={styles.title}>GDG Open Day</h1>
          <h2 className={styles.date}>16 Oct</h2>
        </div>
        <div className={styles.controls}>
          {images.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentImage(index)}
              className={
                currentImage === index
                  ? `${styles.heroIndicator}`
                  : `${styles.heroIndicator} ${styles.heroIndicatorInactive}`
              }
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RegisterAnswerHero;
