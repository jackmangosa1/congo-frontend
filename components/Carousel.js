import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Image from 'next/image';
import styles from '../styles/Carousel.module.css'
import {useRouter} from "next/router"

const Carousel = () =>{

    const inspirationData = [
        {id: 1, title: 'Discover Congo', image: '/inspiration/animals.jpg'},
        {id: 2, title: 'Travel Video', image: '/inspiration/beach.jpg' },
        {id: 3, title: 'Deals and offer', image: '/inspiration/forest.jpg'},
        {id: 4, title: 'Deals and offer', image: '/inspiration/forest.jpg'},
      ]
    const router = useRouter()

    return(
        <div className={styles.container}>
             <Swiper 
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true} 
            >

            {inspirationData.map( item => (
                <SwiperSlide className={styles.slide} key={item.id}>
                    <Image src={item.image} width={440} height={250} className={styles.image}/>
                </SwiperSlide>
                     
            ))}
            </Swiper>
        </div>
       

    )
    
        
}

export default Carousel;