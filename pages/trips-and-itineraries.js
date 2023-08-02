import Image from "next/image";
import styles from "../styles/TripsAndItineraries.module.css";
import { Select, Input, Group } from '@mantine/core';
import Trip from "../components/Trip"
import Cards from "../components/Cards"



const TripsAndItineraries = () => {
    const categories = [
        {id: 1, title: 'Find an agent', image: '/agent.jpg', link: '/find-a-travel-agency'},
        {id: 2, title: 'Deals and packages', image: '/package.jpg', link: '/deals-and-travel-packages'},
      ]

    return ( 
        <div className={styles.container}>
           <Image src="/road.jpg" height={300} width={500} /> 
           <span className={styles.title}>Trips and itineraries</span>
           <span className={styles.description}>Discover the journey of a lifetime in Australia.</span>
           

           <div className={styles.main}>
            <Select
                        placeholder='Trip-category'
                        data={[
                            { value: 'road-trip', label: 'Road Trip' },
                            { value: 'weekend-gateways', label: 'Weekend gateways' },
                            { value: 'family', label: 'Family' },
                            { value: 'food-and-drink', label: 'Food & Drink' },
                            { value: 'art-and-culture', label: 'Art  & Culture' },
                            { value: 'luxury', label: 'Luxury' },
                        ]}
                        className={styles.select}
                />
                <Trip/>
           </div>
           <Cards items={categories} title="Ready to book?"/>
        </div>
     );
}
 
export default TripsAndItineraries;