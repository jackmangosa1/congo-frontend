import styles from "../styles/Agency.module.css"
import Image from "next/image";
import Link from "next/link";
import ContactDrawer from "./ContactDrawer";
import { useState } from "react";

const Agency = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const handleDrawerOpen = () =>{
        setIsDrawerOpen(true)
    }
    const agencies= [
        {id: 1, title: 'African Travel', image: '/logo1.png', email:'africantravel@gmail.com', link: 'https://africantravelinc.com/'},
        {id: 2, title: 'Congo tours', image: '/logo2.png', email:'congotours@gmail.com', link: 'https://www.globalbushtratour.com/'},
        {id: 3, title: 'Safari travel', image: '/logo1.png', email:'safaritravel@gmail.com', link: 'https://africantravelinc.com/'},
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
                        <Link className={styles.button} href={agency.link}>
                            Website
                        </Link>
                        <button className={styles.button} onClick={handleDrawerOpen}>Contact</button>
                     
                    </div>
                    <ContactDrawer isDrawerOpen={isDrawerOpen} closeDrawer={()=> setIsDrawerOpen(false)}/>
                </div>
            ))}
          
        </div>
    );
}
 
export default Agency;