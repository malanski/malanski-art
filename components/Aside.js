import Image from "next/image"
import Carousel from "nuka-carousel"
import retrato1 from "../public/retrato01.jpg"
import retrato2 from "../public/retrato02.jpg"
import retrato3 from "../public/retratoAmelie.jpg"
import retrato4 from "../public/retratoSherlok.jpg"
import retrato5 from "../public/oriental02.jpeg"


import styles from '../styles/Aside.module.scss'


export const Aside = () => {
    return (
        <aside className={styles.asideContainer}>

            <div className={styles.carroselAside}>
                <Carousel>
                    <div className={styles.asideImage}>
                        <Image layout="responsive" title="retrato" alt="retrato" src={retrato1} />
                    </div>
                    <div className={styles.asideImage}>
                        <Image layout="responsive" title="retrato" alt="retrato" src={retrato2} />
                    </div>
                    <div className={styles.asideImage}>
                        <Image layout="responsive" title="retrato" alt="retrato" src={retrato3} />
                    </div>
                    <div className={styles.asideImage}>
                        <Image layout="responsive" title="retrato" alt="retrato" src={retrato4} />
                    </div>
                    <div className={styles.asideImage}>
                        <Image layout="responsive" title="retrato" alt="retrato" src={retrato5} />
                    </div>
                </Carousel>
            </div>

        </aside>
    )
}