import React from 'react'
import styles from "./Head.module.css"
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

function Head() {
  return (
    <div className={styles.container}>
      <QrCodeScannerIcon className={styles.icon} />
      <div className={styles.heads}>
        <h3 className={styles.head}>Qr</h3>
        <h3 className={styles.head}>Code</h3>
        <h3 className={styles.head}>Generator</h3>
      </div>
    </div>
  )
}

export default Head