import styles from './Services.module.css'
import { useState } from 'react'

export default function Services() {

    const [ panel, setPanel ] = useState(0)

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h1>Servicios</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales metus eu gravida molestie. Nullam risus augue, semper ac magna ac, dignissim interdum ligula.
                </p>
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.active}>Planificación del Producto</button>
                <button>Planificación del Desarrollo</button>
                <button>Testing del Producto</button>
                <button>Escalamiento del Producto</button>
            </div>
            <div className={styles.services}>
                <div className={styles.servicesContainer}>
                    <div className={styles.service}>
                        <h1>Descripción Producto</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}