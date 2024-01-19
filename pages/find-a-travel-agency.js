import styles from "../styles/FindTravelAgency.module.css"
import Image from "next/image";
import Agent from "../public/agent.jpg";
import Agency from "../components/Agency";

const FindTravelAgency = () => {
    return ( 
        <div className={styles.container}>
            <Image src={Agent} height={300} width={500} className={styles.heroImage} alt=""/>
            <span className={styles.title}>FIND A TRAVEL AGENCY</span>
            <p className={styles.description}>An Congo specialist has the knowledge and experience to help you plan and book every detail of your Congo trip.</p>
            <Agency/>
        </div>
     );
}
 
export default FindTravelAgency;