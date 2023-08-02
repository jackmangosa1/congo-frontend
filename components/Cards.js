import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "../styles/Cards.module.css"
import Image from "next/image";
import { useRouter } from 'next/router';


const Cards = ({items, categories, title }) => {
    
    const router= useRouter()
    return (  
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
            {categories && (
                <div className={styles.categories}>
                {categories.map( category =>(
                    <div className={styles.category}>{category.title}</div>
                ))}

            </div>
            )}
            
          
            <Swiper 
                Navigation
                modules={[Navigation ]}
                slidesPerView={1.2}
                loop={true}
                spaceBetween={10}
                className={styles.places}
            >
            {items.map( item => (
                <SwiperSlide className={styles.slide} onClick={() =>router.push(item.link && item.link)}>
                    <Image src={item.image} width={350} height={400}/>
                    <span className={styles.placeTitle}>{item.title}</span>
                    
                </SwiperSlide>
            ))}
            </Swiper> 
        </div>
    );
}
 
export default Cards;