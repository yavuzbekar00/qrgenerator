"use client"
import React, { useState, useEffect } from 'react';
import styles from "./QrCard.module.css";

function QrCard() {
    const [error, setError] = useState("");
    const [inputData, setInputData] = useState("");
    const [qrApi, setQrApi] = useState("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/in/yavuz-bekar-bb260225b/");
    
    const handleButton = () => {
        if (inputData === "") {
            setError("Please enter some data!");
            setQrApi("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/in/yavuz-bekar-bb260225b/");
        } else {
            setQrApi(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputData}`);
        }

    }

    const downloadQrCode = () => {
        if (inputData) {
          fetch(qrApi)
            .then(response => response.blob())
            .then(blob => {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'qrcode.png'; // İndirilen dosyanın adı
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
            })
            .catch(error => {
              console.error("QR code download error: ", error);
            });
        }
        setInputData("")
      };
      

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.detail}>
                    <input
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)}
                        className={styles.input}
                        type='text'
                        placeholder='Enter your text or URL'
                    />
                    {error === "" ? undefined : <div className={styles.error}>{error}</div>}
                    <button onClick={handleButton} className={styles.button}>Create Qr Code</button>
                </div>
                <div className={styles.line}></div>
                <div className={styles.qrcode}>
                    <div className={styles.qrHead}>Scan Qr</div>
                    <div className={styles.qr}>
                        <img src={inputData ? qrApi : "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.linkedin.com/in/yavuz-bekar-bb260225b/"} alt="QR Code" />
                    </div>
                    <button onClick={downloadQrCode} className={styles.button}>Download Qr Code</button>
                </div>
            </div>
        </div>
    )
}

export default QrCard;
