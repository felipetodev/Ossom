import Image from 'next/image'
import styles from './HowWeWork.module.css'

export default function HowWeWork() {
    return(
        <section className={styles. container}>
            <div className={styles.waveContainer}>
                <svg
                className={styles.wave}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 508 52.917"
                preserveAspectRatio="none"
                >
                <path
                    d="M0 0s40.955 23.283 63.5 23.283S104.455 0 127 0s40.955 23.283 63.5 23.283S231.455 0 254 0s40.955 23.283 63.5 23.283S358.455 0 381 0s40.955 23.283 63.5 23.283S508 0 508 0v52.917H0z"
                    fill="purple"
                ></path>
                </svg>
                <svg
                className={styles.wave}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 508 52.917"
                preserveAspectRatio="none"
                >
                <path
                    d="M0 0s40.955 23.283 63.5 23.283S104.455 0 127 0s40.955 23.283 63.5 23.283S231.455 0 254 0s40.955 23.283 63.5 23.283S358.455 0 381 0s40.955 23.283 63.5 23.283S508 0 508 0v52.917H0z"
                    fill="purple"
                ></path>
                </svg>
                <svg
                className={styles.wave}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 508 52.917"
                preserveAspectRatio="none"
                >
                <path
                    d="M0 0s40.955 23.283 63.5 23.283S104.455 0 127 0s40.955 23.283 63.5 23.283S231.455 0 254 0s40.955 23.283 63.5 23.283S358.455 0 381 0s40.955 23.283 63.5 23.283S508 0 508 0v52.917H0z"
                    fill="purple"
                ></path>
                </svg>
            </div>
            <div className={styles.title}>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum nisi id nunc sagittis, a luctus dui accumsan. Praesent a leo in massa viverra volutpat.</p>
            </div>
            <div className={styles.grid}>
                <div className={styles.cardContainer}>
                    <Image
                        src='/images/card2.png'
                        alt=''
                        className={styles.cardIcon}
                        height={158}
                        width={181}
                    />
                    <h4>Diseño</h4>
                    <div className={styles.card}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum nisi id nunc sagittis, a luctus dui accumsan. Praesent a leo in massa viverra volutpat.</div>
                </div>
                <div className={styles.cardContainer}>
                    <Image
                        src='/images/card2.png'
                        alt=''
                        className={styles.cardIcon}
                        height={158}
                        width={181}
                    />
                    <h4>Estructura</h4>
                    <div className={styles.card}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum nisi id nunc sagittis, a luctus dui accumsan. Praesent a leo in massa viverra volutpat.</div>
                </div>
                <div className={styles.cardContainer}>
                    <Image
                        src='/images/card2.png'
                        alt=''
                        className={styles.cardIcon}
                        height={158}
                        width={181}
                    />
                    <h4>Desarrollo</h4>
                    <div className={styles.card}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum nisi id nunc sagittis, a luctus dui accumsan. Praesent a leo in massa viverra volutpat.</div>
                </div>
                <div className={styles.cardContainer}>
                    <Image
                        src='/images/card2.png'
                        alt=''
                        className={styles.cardIcon}
                        height={158}
                        width={181}
                    />
                    <h4>Entrega</h4>
                    <div className={styles.card}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum nisi id nunc sagittis, a luctus dui accumsan. Praesent a leo in massa viverra volutpat.</div>
                </div>
            </div>
        </section>
    )
}