import styles from "../../styles/WhereToStay.module.css"
import Image from "next/image";
import Accommodation from "../../components/Accommodation";
const WhereToSaty = () => {
   
    return (  
        <div>
            <Image src="/placesToGo/Kinshasa.jpg" width={500} height={300}/>
            <span className={styles.title}>Where to stay in Kinshasa</span>
            <p className={styles.description}>
                Located between white sand beaches and rolling hills, Adelaide is one of the world’s Great Wine Capitals. With more than 200 wineries within a one-hour drive, it is a gateway to superb wine and food touring. The capital of South Australia is also known as the festival city and has a vibrant food market precinct, an eclectic small bar scene and terrific museums featuring Aboriginal art and artefacts.
                Here's where to stay to make the most of your visit to Adelaide.
            </p>
            <Accommodation/>

        </div>
    );
}
 
export default WhereToSaty;