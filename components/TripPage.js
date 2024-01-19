import Image from "next/image";
import styles from "../styles/TripPage.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const TripPage = ({title, description}) => {
    const thingsToDo = [
        {id: 1, title: 'Nsele', image: '/Tchegera.jpg'},
        {id: 2, title: 'Tchegera', image: '/Nsele.jpg' },
        {id: 3, title: 'Virunga', image: '/Rwenzori.jpg'},
      ]
    return ( 
        <div className={styles.container}>
              <Swiper 
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                speed={500}
                loop={true} 
                autoplay={true}
            >

            {thingsToDo.map( item => (
                <SwiperSlide className={styles.slide} key={item.id}>
                    <Image src={item.image} width={500} height={300} className={styles.image}/>
                </SwiperSlide>
                     
            ))}
            </Swiper>
    
            <span className={styles.title}>Park de la Nsele</span>
            <p className={styles.description}>
            Whip out to Winton this September for Australia&apos;s quirkiest event, the Outback Festival. Five days of quintessential outback fun will take over the Outback Queensland town of Winton from 19 – 23 September, during the Queensland school holidays. The festival&apos;s signature event, the Quilton Australian Dunny Derby, will top off five days of outback celebrations including warm Outback hospitality and nightly live entertainment. Sports fans can test their skills in the True Blue Aussie Sports, Outba...
            </p>
            <button className={styles.button}>Visit la Nsele</button>
        
        
        </div>
     );
}
 
export default TripPage;