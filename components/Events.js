import styles from "../styles/Events.module.css"
import Image from "next/image"
import { useRouter } from "next/router"

const Events = () => {
    const router = useRouter()
    const data = [
        {id: 1, title: 'Box Match', image: '/box.jpg', date: '11 September 2023', place: 'Kisangani DRC', link: '/event-page' },
        {id: 2, title: 'Climate conference', image: '/conference.jpg', date: '11 September 2023', place: 'GOMA DRC', link: '/event-page'  },
        {id: 3, title: 'Fally Concert', image: '/concert.jpg', date: '15 December 2023', place: 'Kinshasa DRC', link: '/event-page'  },
      ]

    return ( 
        <div className={styles.container}>
            {data.map( event => (
                <div className={styles.event} key={event.id} onClick={()=> router.push(event.link)}>
                    <Image className={styles.eventImage} src={event.image}  height={300} width={500}/>
                    <div className={styles.description}>
                        <span className={styles.eventTitle}>{event.title}</span>
                        <span className={styles.date}>{event.date}</span>
                        <span className={styles.place}>{event.place}</span>
                    </div>
                    
                </div>
            ))}

        </div>
     );
}
 
export default Events;