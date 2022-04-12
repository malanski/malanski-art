import styles from './Main.module.scss'
import Image from "next/image"
import retrato5 from "../../public/oriental02.jpeg"
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import ProductCard from '../../components/ProductCard'

export default function ArtStore () {
    
    return (
        <main className={styles.storeHome}>
            {/* Removi as margin e o width pra poder funcionar o  layout responsive */}

            <div className={styles.productCards}>
                <ProductCard />
            </div>

            <div className={styles.pagitationButtons}>
                <Button colorScheme='green' size='lg' leftIcon={<FontAwesomeIcon icon={faArrowAltCircleLeft} />}>Previous</Button>
                <p>1 / 1</p>
                <Button colorScheme='green' size='lg' rightIcon={<FontAwesomeIcon icon={faArrowAltCircleRight} />}>Next</Button>
            </div>

        </main>
    )
}