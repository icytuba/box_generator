import React from 'react'
import styles from './Display.module.css';

const Display = ({boxes}) => {

    return (
        <div>
            {
                boxes.map( (box, index) => 
                    (
                        <div className={styles.box} key={index} style={{backgroundColor:box}}>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Display