import React from 'react';
import styles from './logo.module.css';

export default function Logo() {
  return <>
    <div className={styles.logo}>
      <img
        className={styles.e_migue}
        alt="e-migué"
        src="/logo_e-migue_branco.png"
      />
      <h1 className={styles.text_wrapper}>e-migué</h1>
    </div>
  </>;
};