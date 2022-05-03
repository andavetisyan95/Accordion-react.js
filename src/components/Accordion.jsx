//react hooks
import React, { useState } from "react";
//helpers
import { content } from "../sources/content";
//styles
import styles from "../styles/Accordion.module.scss";

export default function Accordion() {
  const [index, setIndex] = useState([]);

  const showText = (i) => {
    if (!index.includes(i)) {
      if (index.length < 3) {
        setIndex(index.concat(i));
      } else {
        index.shift();
      }
    } else {
      setIndex(index.filter((el) => el !== i));
    }
  };
  console.log(index);
  console.log(index.length);
  return (
    <div className={styles.container}>
      {content.map(({ title, body, id }, i) => (
        <div key={`${id}_${title}`} className={styles.container_div}>
          <div className={styles.container_div_title}>
            <h4 className={`${index.includes(i) ? styles.changeColor : null}`}>
              {title}
            </h4>
            <span
              className={`${index.includes(i) ? styles.roatet : null}`}
              onClick={() => showText(i)}
            >
              {index.includes(i) ? "-" : "+"}
            </span>
          </div>
          <div
            className={`${
              index.includes(i) ? styles.showText : styles.container_div_text
            } `}
          >
            {body}
          </div>
        </div>
      ))}
    </div>
  );
}
