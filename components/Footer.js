import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Footer.module.scss'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'


export const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <h2>
                Footer
                
            </h2>
            <div className={styles.signature}>
                <FontAwesomeIcon icon={faGuitar}></FontAwesomeIcon>
                <p>Developed by <a href="https://github.com/malanski">Ulisses Malanski</a></p>
            </div>

        </footer>
    )
}