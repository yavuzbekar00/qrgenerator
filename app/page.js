import Head from "@/Components/Head/Head"
import styles from "./page.module.css"
import QrCard from "@/Components/QrCard/QrCard"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>
      <QrCard></QrCard>
    </div>
  )
}
