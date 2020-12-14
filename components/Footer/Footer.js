import styles from './Footer.module.css'
import { Container } from '../'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <Container>
                <div className={styles.logo}></div>
                <div className={styles.grid}>
                    <div>
                        <h5>Conocenos</h5>
                        <p>Diseñador productos y experiencias para usuarios.</p>
                    </div>
                    <div>
                        <h5>Contacto</h5>
                        <ul>
                            <li>fe.ossandon.u@gmail.com</li>
                            <li>+569 7 8886694</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Dirección</h5>
                        <ul>
                            <li>Enrique Foster,</li>
                            <li>Las Condes #085</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Otros Links</h5>
                        <ul>
                            <li>Politica de privacidad</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}