import React from 'react'
import styles from "./QrCard.module.css"

function QrCard() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.detail}>
                    <input className={styles.input} type='text' placeholder='Enter your text or URL'></input>
                    <button className={styles.button}>Create Qr Code</button>
                </div>
                <div className={styles.line}></div>
                <div className={styles.qrcode}>
                    <div className={styles.qrHead}>Scan Qr</div>
                    <div className={styles.qr}>
                        <img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/in/yavuz-bekar-bb260225b/'></img>
                    </div>
                    <button className={styles.button}>Download Qr Code</button>
                </div>
            </div>
        </div>
    )
}

export default QrCard