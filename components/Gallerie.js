import styles from "../styles/Gallerie.module.css"
import  Image from "next/image"
import { UilInstagram } from '@iconscout/react-unicons'

const Gallerie = () => {
    const grid = [
        {id: 1, image: '/Grid/1.jpg'},
        {id: 2, image: '/Grid/2.jpg' },
        {id: 3, image: '/Grid/3.jpg' },
        {id: 4, image: '/Grid/4.jpg' },
        {id: 5, image: '/Grid/9.jpg' },
        {id: 6, image: '/Grid/2.jpg' },
        {id: 7, image: '/Grid/3.jpg' },
        {id: 8, image: '/Grid/4.jpg' },
        {id: 9, image: '/Grid/9.jpg' },
        {id: 10, image: '/Grid/1.jpg' },
    ]
    return ( 
        <div className={styles.container}>
            <span className={styles.title}>@CONGO</span>
            <div className={styles.grid}>
                {grid.map( item => (
                    <div key={item.id} className={styles.imageWrapper}>
                        <Image src={item.image} height={200} width={200} className={styles.image}/>
                        <UilInstagram size="30" color="white" className={styles.icon}/>
                    </div>
                ))}

            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>Load More</button>
            </div>
         
        </div>
     );
}
 
export default Gallerie;