import { useEffect, useRef } from "react";
import styles from "./NewsLine.module.scss";
import { newsTxt } from "../data";

export default function NewsLine() {
  const elementRef = useRef();

  useEffect(() => {
    const animatedElement = elementRef.current;
    const elementWidth = animatedElement.scrollWidth; // the total width (visible and hidden)

    // Create a new style element
    const styleElement = document.createElement("style");
    document.head.appendChild(styleElement);
    const styleSheet = styleElement.sheet;

    // Define the keyframe animation
    styleSheet.insertRule(
      `
      @keyframes move {
        0% {
          transform: translateX(-30%);
        }
        100% {
          transform: translateX(${elementWidth}px);
        }
      }
    `,
      styleSheet.cssRules.length
    );

    // Define the animation and hover state
    styleSheet.insertRule(
      `
      .animate {
        animation: move 30s infinite linear;
        position: relative; /* Ensure the element can be moved */
      }
    `,
      styleSheet.cssRules.length
    );

    styleSheet.insertRule(
      `
      .animate:hover {
        animation-play-state: paused;
      }
    `,
      styleSheet.cssRules.length
    );

    // Add the animation class to the element
    animatedElement.classList.add("animate");

    // Cleanup the style element on component unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <section className={styles.sectionNewsLine}>
      <div ref={elementRef}>
        <ul className={styles.newsList}>
          {newsTxt.map((item) => (
            <li key={item.txt} className={styles.newsItem}>
              <a href={item.link} className={styles.newsLink}>
                {item.txt}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
