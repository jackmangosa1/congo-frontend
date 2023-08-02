import styles from "../styles/TravelInspiration.module.css"
import Image from "next/image";
import come from "../public/Grid/2.jpg";
import { useState, useRef} from "react";
import { UilPlayCircle } from '@iconscout/react-unicons';
import SquareCard from "../components/SquareCard";
import Cards from "../components/Cards";
import Gallerie from "../components/Gallerie";

const  TravelInspiration = () => {

    const [showControl, setShowControl] = useState(false)
    const videoRef = useRef(null);

    const handleWatchVideo = () => {
        setShowControl(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const placesToGo = [
        {id: 1, title: 'Kinshasa', image: '/placesToGo/kinshasa.jpg'},
        {id: 2, title: 'Goma', image: '/placesToGo/Goma.jpg' },
        {id: 3, title: 'Lubumbashi', image: '/placesToGo/Lubumbashi.jpg'},
        {id: 4, title: 'Kisangani', image: '/placesToGo/Kisangani.jpg'},
      ]
    
      const thingsToDo = [
        {id: 1, title: 'Events', image: '/thingsToDo/festival.jpg'},
        {id: 2, title: 'Food', image: '/thingsToDo/food.jpg' },
        {id: 3, title: 'Art', image: '/thingsToDo/art.jpg'},
      ]

    

    return ( 
        <div className={styles.container}>
            <div className={styles.hero}>
                <Image src={come} height={300} width={500} className={styles.heroImage}/>
                <div className={styles.overlay}></div>
                
                <div className={styles.heroText}>
                    <span>Come and say</span>
                    <span>Mbote!</span>
                </div>
               
            </div>

            <div className={styles.main}>
                <span className={styles.mainTitle}>Kick off the holiday of a lifetime.</span>
                <p>There's no better time to experience the magic of Congo. So, pack your bags and get ready to say "Mbote" to a land brimming with wonders and warm hospitality.</p>
                <p>Watch our exclusive short film, showcasing the beauty and allure of Congo.</p>

                <div className={styles.videoContainer}>
                    <video src="/Congo.mp4"  ref={videoRef} controls={showControl} className={styles.video}/>
                    {showControl === false && (
                         <div className={styles.playVideo} onClick={handleWatchVideo}>
                         <UilPlayCircle size="30" color="white"/>
                         <span>Watch the video</span>
                     </div>
                    )}
                   
                </div>
            </div>

            <SquareCard/>
            <Cards items={thingsToDo} title="Start your next Adventure"/>
            <Cards items={placesToGo} title="Explore host destinations"/>
            <Gallerie/>
            <Cards items={placesToGo} title="First-time traveller guide"/>
        </div>
     );
}
 
export default TravelInspiration;