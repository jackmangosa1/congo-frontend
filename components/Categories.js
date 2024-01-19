import Image from "next/image";
import styles from "../styles/Categories.module.css"
import { UilAngleRightB } from '@iconscout/react-unicons';
import { useRouter } from "next/router";



const Categories = () => {
    const router = useRouter()
    const inspirationData = [
        {id: 1, title: 'Come and say Mbote!', image: '/inspiration/animals.jpg', link: '/travel-inspiration'},
        {id: 2, title: "What's on", image: '/inspiration/beach.jpg', link: '/event-calendar' },
        {id: 3, title: 'Trip and itineraries', image: '/inspiration/forest.jpg', link: '/trips-and-itineraries'},
      ]

    return ( 
        <div className={styles.container}>
            {inspirationData.map(item =>(
                <div className={styles.category} onClick={() => router.push(item.link)} key={item.id}>
                    <div className={styles.categoryImageContainer}>
                        <Image src={item.image} alt="categoty-image" height={130} width={200} className={styles.categoryImage}/>
                        <span className={styles.categoryTitle}>{item.title}</span>
                        
                    </div>
                     
                    <UilAngleRightB size="30"  className={styles.categoryIcon}/>
                </div>
               
            ))}
        </div>
     );
}
 
export default Categories;