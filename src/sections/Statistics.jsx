import styles from "./Statistics.module.scss";
import { statistics } from "../data";
import { StatItem } from "../components";
import { useEffect, useRef, useState } from "react";

export default function Statistics() {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const items = [];
    statistics.forEach((obj, index) => {
      items.push(
        <li key={obj.type}>
          <StatItem dataObj={obj} index={index} />
        </li>
      );
    });
    setListItems(items);
  }, [statistics]);

  // let list;
  // useEffect(() => {
  //   list = [];
  //   statistics.forEach((item) => /* add li programatically to ul component */);
  // }, []);

  // console.log(list);
  const elementRef = useRef();
  // useEffect(() => {
  //   let targetEl = elementRef.current.lastChild;

  //   const lastCardObserver = new IntersectionObserver((entries) => {
  //     const lastCard = entries[0];
  //     if (!lastCard.isIntersecting) return;
  //     lastCardObserver.unObserve(lastCard.target);
  //     lastCardObserver.observe(targetEl);
  //   });
  //   Array.from(elementRef.current.lastChild).forEach();
  //   lastCardObserver.observe(elementRef.current.children[0]);
  //   //  return ()=>{lastCardObserver.unobserve(elementRef.current.children)}
  // }, []);

  return (
    <section className={styles.sectionStatistics}>
      <div className={styles.statWrapper}>
        <ul className={styles.statList} ref={elementRef}>
          {listItems}
        </ul>
      </div>
    </section>
  );
}

// <ul className={styles.statList} ref={elementRef}>
//   {list &&
//     list.map((obj, index) => (
//       <li key={obj.type}>
//         <StatItem dataObj={obj} index={index} />
//       </li>
//     ))}
// </ul>
