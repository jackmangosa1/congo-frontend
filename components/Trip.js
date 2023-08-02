import Image from "next/image";
import styles from "../styles/Trip.module.css";


const Trip = () => {

        const data = [
            {id: 1, title: 'Tchegera Island', image: '/Tchegera.jpg', categories: ['Family', 'Food & drinks', 'Art & Culture'] , description: 'Discover Sydney’s glistening waterways and charming inner-city precincts before indulging yourself in the Hunter Valley wine region.' },
            {id: 2, title: 'Park de Virunga', image: '/Virunga.jpg', categories: ['Family', 'Food & Drinks', 'Art & Culture'], description: 'Discover Sydney’s glistening waterways and charming inner-city precincts before indulging yourself in the Hunter Valley wine region.'  },
            {id: 3, title: 'Park de la Nsele', image: '/Nsele.jpg', categories: ['Family', 'Food & Drinks', 'Art & Culture'], description: 'Discover Sydney’s glistening waterways and charming inner-city precincts before indulging yourself in the Hunter Valley wine region.' },
          ]
        
    return ( 
        <div>
            {data.map( trip =>(
                <div className={styles.trips}>
                    <Image src={trip.image} height={200} width={400} className={styles.image}/>
                    <span className={styles.title}>{trip.title}</span>
                    <div className={styles.categories}>
                        {trip.categories.map( category =>(
                            <span className={styles.category}>{category}</span>
                        ))}
                    </div>
                    <span>{trip.description}</span>

                </div>
            ))}
            <button className={styles.button}>Load More</button>
        </div>
     );
}
 
export default Trip;