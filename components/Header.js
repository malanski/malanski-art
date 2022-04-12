import { Nav } from './Nav'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'
import { Box, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { PhoneIcon, WarningIcon, SearchIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faSquare } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    
    return(
        <div className={styles.headerStore}>

            <div className={styles.headerRow}>

                <h1>Ulisses Malanski Portfolio</h1>


                
                <div>

                    <div className={styles.userLog}>
                        
                            <Link href="/Github">
                                <a title='Github' className={styles.userIn}>
                                    <FontAwesomeIcon className={styles.fontal} icon={faSquare} /><br/>
                                    Github
                                </a>
                            </Link>
                            
                            <Link href="/Instagram">
                                <a title='Instagram'className={styles.userIn}>
                                    <FontAwesomeIcon className={styles.fontal} icon={faSquare} /><br/>
                                     Instagram
                                </a>
                            </Link>

                            <Link href="/Instagram">
                                <a title='Instagram'className={styles.userIn}>
                                    <FontAwesomeIcon className={styles.fontal} icon={faSquare} /><br/>
                                     Linkedin
                                </a>
                            </Link>
                    </div>
                    
                </div>

                

            </div>
            
            

            <Nav />
        </div>
    )
}