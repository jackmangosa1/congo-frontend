import styles from "../styles/Hero.module.css"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Hero = () => {
    const [width, setWidth] = useState()
    useEffect(() =>{
        const handleResize = () =>{
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () =>{
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    const router = useRouter()

    return ( 
        <div className={styles.container}>
            <video src="/Congo.mp4" autoPlay loop muted className={styles.heroVideo}/>
            <div className={styles.callToActionButton}>
                        <button className={styles.button} onClick={() => router.push('/travel-inspiration')}>Be inspired</button>
                        <button className={styles.button}>Find your own Adventure</button>
                        {/* <h1 style={{color: 'white'}}>{width}</h1> */}
            </div>
        </div>
     );
}
 
export default Hero;