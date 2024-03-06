import { useState } from "react";
import styles from './superHealth.module.css';

export default (props) => {
   
    return (
     <div className={styles.superhealth_wrapper}>
        <div className={styles.headingWrapper}>
            superHealth section on remote
        </div>
        <div className={styles.superHealth}>
            <div className={styles.textWrapper}>
                  <div className={styles.heading}>
                        Name : {props.firstName}
                  </div>
                  <div className={styles.body}>
                        Unlock Super Health !!
                  </div>
            </div>
            <div className={styles.imageWrapper}>
                  <div>
                     Image Wrapper
                  </div>
            </div>
        </div>
     </div>
    );
  };
  