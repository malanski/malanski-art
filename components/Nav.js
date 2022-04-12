import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt, faBusinessTime, faBook, faNewspaper, faHandsHelping } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/Header.module.scss'


import Link from 'next/link'

export const Nav = () => {
    return(
        <div >
            <ul className={styles.navigation}>
                
                    <Link href="/" passHref>
                            <a title="home">
                                <li><FontAwesomeIcon icon={faHomeAlt}></FontAwesomeIcon> Web Dev</li>
                            </a>
                    </Link>


                    <Link className={styles.bla} href="/add" passHref>
                            <a title="Add your business">
                                <li><FontAwesomeIcon icon={faBusinessTime}></FontAwesomeIcon> Art</li>
                                
                            </a>
                    </Link>

                    <Link href="/about" passHref>
                        
                            <a title="About">
                                <li><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Teaching</li>
                            </a>
                            
                    </Link>

                    <Link href="/news" passHref>
                        
                            <a title="News">
                                <li><FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon> Music</li>
                            </a>
                        
                    </Link>

                    <Link href="/help" passHref>
                        
                            <a title="Help">
                                <li><FontAwesomeIcon icon={faHandsHelping}></FontAwesomeIcon> Job</li>
                            </a>
                        
                    </Link>
            </ul>

        </div>
    )
}