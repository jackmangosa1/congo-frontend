import Image from "next/image";
import styles from "../styles/FindTransportation.module.css"
import { UilArrowUpRight } from '@iconscout/react-unicons'
import Link from "next/link";

const FindTransportation = () => {
    const data = [
        {
            id: 1,
            title:'Goma Tours', 
            image:'/car.jpg', 
            category:'Cars',
            price:'300USD',
            link:'https://skycityadelaide.com.au/hotel/eos-by-skycity/',
        },

        {
            id: 2,
            title:'Cotrame', 
            image:'/car.jpg', 
            category:'Cars', 
            price:'200USD',
            link:'https://skycityadelaide.com.au/hotel/eos-by-skycity/',
        },

        {
            id: 3,
            title:'Emmanuel', 
            image:'/car.jpg', 
            category:'Boat',
            price:'300USD',
            link:'https://skycityadelaide.com.au/hotel/eos-by-skycity/',
        },
    ]

    return ( 
        <div className={styles.container}>
            <Image src="/road.jpg" height={300} width={500} className={styles.image} alt=""/>
            <span className={styles.title}>Find transportation</span>
            <p className={styles.description}> 
                Whether you hop on a ferry or hire a car, it&apos;s easy to get around Congo. No matter your budget or schedule, you&apos;ll find a transportation option ideal for your itinerary. Choose from buses, cruises, cars and more to travel further and explore more.
            </p>
            <div className={styles.transportationList}>
                {data.map( transportation => (
                    <div className={styles.transportation} key={transportation.id}>
                        <Image src={transportation.image} height={100} width={150} className={styles.transportationImage} alt=""/>
                        <div  className={styles.rightSide}>
                            <span>{transportation.title}</span>
                            <span>{transportation.category}</span>
                            <Link href={transportation.link}>
                                <div className={styles.price}>
                                    From <span>{transportation.price}</span>
                                    <UilArrowUpRight size="25" className={styles.redirectIcon}/>
                                </div>
                            </Link>
                            
                           
                        </div>
                    </div>
                ))}
            </div>

        </div>
     );
}
 
export default FindTransportation;