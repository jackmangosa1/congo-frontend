import Image from "next/image";
import styles from "../styles/EventPage.module.css"
import { UilArrowDown } from '@iconscout/react-unicons'
const Event = () => {
    return ( 
        <div className={styles.container}>
            <Image src="/conference.jpg" height={300} width={500}/>
            <span className={styles.title}>OUTBACK FESTIVAL</span>
            <span className={styles.venue}>Winton, Winton, Queensland 4735</span>
            <span className={styles.date}>23 September 2022 - 23 September 2023</span>
            <button className={styles.button}>Book Now</button>
            <p className={styles.description}>
            Whip out to Winton this September for Australia&apos;s quirkiest event, the Outback Festival. Five days of quintessential outback fun will take over the Outback Queensland town of Winton from 19 – 23 September, during the Queensland school holidays. The festival&apos;s signature event, the Quilton Australian Dunny Derby, will top off five days of outback celebrations including warm Outback hospitality and nightly live entertainment. Sports fans can test their skills in the True Blue Aussie Sports, Outba...
            </p>
            <div className={styles.readMore}>
                <span>Read more</span>
                <UilArrowDown size="25"/>  
            </div>
        </div>
     );
}
 
export default Event;