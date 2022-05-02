import React, { useState } from 'react';
import { content } from "../sources/content"


export default function Accordion() {

    // const [showText, setShowText] = useState(false);

    return (
        <div>
            {
                content.map(({title})=>{
                    return(
                        <div className={styles.content_div}> 

                        </div>
                    )
                })
            }
        </div>
    )
}
