import styles from "../styles/FindAccommodation.module.css"
import Image from "next/image";
import Cards from "../components/Cards"
const FindAccommodation = () => {

    const placesToGo = [
        {id: 1, title: 'Where to stay in Kinshasa', image: '/placesToGo/kinshasa.jpg', link: '/kinshasa/where-to-stay'},
        {id: 2, title: '12 Best hotels in Goma', image: '/placesToGo/Goma.jpg', link: '/goma/where-to-stay'},
        {id: 3, title: 'Where to stay in Lubumbashi', image: '/placesToGo/Lubumbashi.jpg', link: '/lubumbashi/where-to-stay'},
        {id: 4, title: 'Where to saty in Kisangani', image: '/placesToGo/Kisangani.jpg', link: '/kisangani/where-to-stay'},
      ]
    return ( 
        <div>
            <Image src="/accommodation.jpg" height={300} width={500} className={styles.image}/>
            <span className={styles.title}>Find accommodation</span>
            <p className={styles.description}>
            From luxury suites with every amenity to affordable art-filled hotels and beachside family apartments, Adelaide has accommodation to suit every taste and budget.
            </p>
            <Cards items={placesToGo} title="Where to stay in Congolese cities"/>
      
            
        </div>
     );
}
 
export default FindAccommodation;