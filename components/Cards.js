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
            spaceBetween={10}
            loop={true}
            className={styles.places}
            breakpoints={{
                545: {
                    slidesPerView: 1.4,
                },
                700: {
                    slidesPerView: 1.6,
                },
                950: {
                    slidesPerView: 2.2, 
                    },
                1115: {
                        slidesPerView: 2.6,
                    },
            }}
            // Add this prop
            navigation={{
                nextEl: '.swiper-button-next', // Use a CSS selector or an HTML element
                prevEl: '.swiper-button-prev' // Use a CSS selector or an HTML element
            }}
            >
            {items.map( item => (
                <SwiperSlide className={styles.slide} onClick={() => item.link && router.push(item.link) }>
                    <Image  className={styles.placeImage} src={item.image} width={350} height={400}/>
                    <span className={styles.placeTitle}>{item.title}</span>
                    
                </SwiperSlide>
            ))}
            </Swiper> 
        </div>
    );
}
 
export default Cards;