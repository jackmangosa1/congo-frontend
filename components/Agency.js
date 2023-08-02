import styles from "../styles/Agency.module.css"
import Image from "next/image";
const Agency = () => {
    const agencies= [
        {id: 1, title: 'African Travel', image: '/logo1.png', email:'africantravel@gmail.com', link: '/find-a-travel-agency'},
        {id: 2, title: 'Congo tours', image: '/logo2.png', email:'congotours@gmail.com', link: '/deals-and-travel-packages'},
        {id: 3, title: 'Safari travel', image: '/logo1.png', email:'safaritravel@gmail.com', link: '/find-a-travel-agency'},
    ]
    return (  
        <div className={styles.container}>
            {agencies.map( agency => (
                <div className={styles.agency}>
                    <div className={styles.info}>
                        <Image src={agency.image} height={70} width={70} className={styles.image}/>
                        <span className={styles.agencyName}>{agency.title}</span>
                    </div>
                    <span className={styles.email}>{agency.email}</span>
                    
                    <div className={styles.buttons}>
                        <button className={styles.button}>Website</button>
                        <button className={styles.button}>Contact</button>
                    </div>
                </div>
            ))}
          
        </div>
    );
}
 
export default Agency;