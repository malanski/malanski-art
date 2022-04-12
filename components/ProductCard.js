import { Box } from '@chakra-ui/react'
import Image from "next/image"
import retrato5 from "../public/oriental02.jpeg"
import retrato4 from "../public/retratoSherlok.jpg"
import retrato3 from "../public/retratoAmelie.jpg"
import retrato2 from "../public/retrato02.jpg"
import retrato1 from "../public/retrato01.jpg"

import styles from '../pages/art-store/Main.module.scss'
import { Button } from '@chakra-ui/react'




export default function ProductCard() { 
return (
    <>
        <Box
            layout='responsive'
            margin='auto'
        
            paddingBottom='5px'
            maxW='sm'
            borderWidth='1px'
            borderRadius='20px'
            overflow='hidden'
            display='flex'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            fontSize='lg'>
            <a herf="#">
                <Image src={retrato3} alt='oriental2'/>
                <Box >
                    <p className={styles.cardName}>Ulisses Malanski</p>
                    <p className={styles.artTitle}>Title: Retrato Amelie Poulain</p>
                </Box>
                <Box>
                    <p className={styles.priceTotal}>$ 1000.00</p>
                </Box>
                <Box>
                    <p className={styles.priceDisc}>$ 900.00</p>
                </Box>
                <Box>
                    <Button colorScheme='red' size='lg'>Buy Now</Button>
                </Box>
            </a>
        </Box>

        <Box
            layout='responsive'
            margin='auto'
        
            paddingBottom='5px'
            maxW='sm'
            borderWidth='1px'
            borderRadius='20px'
            overflow='hidden'
            display='flex'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            fontSize='lg'>
            <a herf="#">
                <Image src={retrato1} alt='retrato'/>
                <Box >
                    <p className={styles.cardName}>Ulisses Malanski</p>
                    <p className={styles.artTitle}>Title: Perfil</p>
                </Box>
                <Box>
                    <p className={styles.priceTotal}>$ 1000.00</p>
                </Box>
                <Box>
                    <p className={styles.priceDisc}>$ 900.00</p>
                </Box>
                <Box>
                    <Button colorScheme='red' size='lg'>Buy Now</Button>
                </Box>
            </a>
        </Box>

        <Box
            layout='responsive'
            margin='auto'
        
            paddingBottom='5px'
            maxW='sm'
            borderWidth='1px'
            borderRadius='20px'
            overflow='hidden'
            display='flex'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            fontSize='lg'>
            <a herf="#">
                <Image src={retrato2} alt='retrato'/>
                <Box >
                    <p className={styles.cardName}>Ulisses Malanski</p>
                    <p className={styles.artTitle}>Title: retrato 02</p>
                </Box>
                <Box>
                    <p className={styles.priceTotal}>$ 1000.00</p>
                </Box>
                <Box>
                    <p className={styles.priceDisc}>$ 900.00</p>
                </Box>
                <Box>
                    <Button colorScheme='red' size='lg'>Buy Now</Button>
                </Box>
            </a>
        </Box>
        
    </>
)
}