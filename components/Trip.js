import Image from "next/image";
import styles from "../styles/Trip.module.css";
import { useRouter } from "next/router";


const Trip = () => {

        const data = [
            {id: 1, title: 'Tchegera Island', image: '/Tchegera.jpg', categories: ['Family', 'Food & drinks', 'Art & Culture'] , description: 'Discover Sydney’s glistening waterways and charming inner-city precincts before indulging yourself in the Hunter Valley wine region.', link: '/trip-page' },
            {id: 2, title: 'Park de Virunga', image: '/Virunga.jpg', categories: ['Family', 'Food & Drinks', 'Art & Culture'], description: 'Discover Sydney’s glistening waterways and charming inner-city precincts before indulging yourself in the Hunter Valley wine region.', link: '/trip-page'   },
            {id: 3, title: 'Park de la Nsele', image: '/Nsele.jpg', categories: ['Family', 'Food & Drinks', 'Art & Culture'], description: 'Discover Sydney’s glistening waterways and charming inner-city precincts before indulging yourself in the Hunter Valley wine region.', link: '/trip-page'  },
          ]
        const router = useRouter()
        
    return ( 
        <div className={styles.container}>
            <div className={styles.trips}>
                {data.map( trip =>(
                    <div className={styles.trip} onClick={()=> router.push(trip.link)} key={trip.id}>
                        <Image src={trip.image} height={200} width={400} className={styles.image}/>
                        <span className={styles.title}>{trip.title}</span>
                        <div className={styles.categories}>
                            {trip.categories.map( category =>(
                                <span className={styles.category} key={category.id}>{category}</span>
                            ))}
                        </div>
                        <span className={styles.description}>{trip.description}</span>

                    </div>
                ))}
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.button}>Load More</button>
            </div>
            
          
        </div>
     );
}
 
export default Trip;