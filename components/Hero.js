import styles from "../styles/Hero.module.css"
import { useRouter } from "next/router";

const Hero = () => {
    const router = useRouter()
    
    return ( 
        <div>
            <video src="/Congo.mp4" autoPlay loop muted className={styles.heroVideo}/>
            <div className={styles.callToActionButton}>
                        <button className={styles.button} onClick={() => router.push('/travel-inspiration')}>Be inspired</button>
                        <button className={styles.button}>Find your own Adventure</button>
            </div>
        </div>
     );
}
 
export default Hero;