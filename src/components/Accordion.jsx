//react hooks
import React, { useState } from 'react';
//helpers
import { content } from "../sources/content";
//styles
import styles from "../styles/Accordion.module.scss"


export default function Accordion() {

    const [showContent, setShowContent] = useState(false);

    const showText = (i)=>{
       return showContent === i ? setShowContent(false) : setShowContent(i)
    }

    return (
            <div className={styles.container}>
            {
                content.map(({title,body},i)=>
                    (
                        <div  key={`${i}_${title}`} className={styles.container_div}> 
                            <div className={styles.container_div_title}>
                                <h4>{title}</h4>
                                <span onClick={()=>showText(i)}>{showContent === i ? "-" : "+"}</span>
                            </div>
                            <div className={`${showContent === i ? styles.showText : styles.container_div_text } `}>
                                {body}
                            </div>
                        </div>
                        
                    )
                )
            }
            </div>
    )
}
