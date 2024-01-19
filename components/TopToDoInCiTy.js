import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "../styles/TopToDoInCity.module.css"

const TopToDoInCity = () => {

    const thingsToDo = [
        {
            id: 1, 
            title: 'Events', 
            image: '/thingsToDo/festival.jpg', 
            description: 'From laid-back beach hotels to oceanfront fine dining, the Gold Coast’s diverse neighbourhoods offer something for everyone. Explore by bicycle, take a coastal walk or find the best surf break around with this must-visit Gold Coast suburb guide. '
        },
        {
            id: 2, 
            title: 'Events', 
            image: '/thingsToDo/food.jpg', 
            description: 'From laid-back beach hotels to oceanfront fine dining, the Gold Coast’s diverse neighbourhoods offer something for everyone. Explore by bicycle, take a coastal walk or find the best surf break around with this must-visit Gold Coast suburb guide. '
        },
        {
            id: 3, 
            title: 'Events', 
            image: '/thingsToDo/art.jpg', 
            description: 'From laid-back beach hotels to oceanfront fine dining, the Gold Coast’s diverse neighbourhoods offer something for everyone. Explore by bicycle, take a coastal walk or find the best surf break around with this must-visit Gold Coast suburb guide. '
        },
        
      ]
      
    return ( 
        <div>
            <span className={styles.title}>Top things to do in Goma</span>
            <Swiper 
                Navigation
                modules={[Navigation ]}
                slidesPerView={1.2}
                loop={true}
                spaceBetween={10}
                className={styles.toDos}
            >
            {thingsToDo.map( thing => (
                <SwiperSlide className={styles.slide} onClick={() => thing.link && router.push(thing.link) } key={thing.id}>
                    <Image src={thing.image} width={350} height={300} className={styles.thingImage} />
                    <span className={styles.thingTitle}>{thing.title}</span>
                    <span className={styles.thingDescription}>{thing.description}</span>
                    
                </SwiperSlide>
            ))}
            </Swiper> 
        </div>
     );
}
 
export default TopToDoInCity;