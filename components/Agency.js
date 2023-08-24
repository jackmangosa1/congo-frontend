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
        {id: 1, title: 'African Travel', image: '/logo1.png', description: 'As the longest established luxury safari operator focused exclusively on the African continent, African Travel, Inc. is dedicated to creating the ultimate African experience' ,link: 'https://africantravelinc.com/'},
        {id: 2, title: 'Congo tours', image: '/logo1.png', description: 'As the longest established luxury safari operator focused exclusively on the African continent, African Travel, Inc. is dedicated to creating the ultimate African experience', link: 'https://www.globalbushtratour.com/'},
        {id: 3, title: 'Safari travel', image: '/logo1.png', description: 'As the longest established luxury safari operator focused exclusively on the African continent, African Travel, Inc. is dedicated to creating the ultimate African experience', link: 'https://africantravelinc.com/'},
    ]
    return (  
        <div className={styles.container}>
            {agencies.map( agency => (
                <div className={styles.agency}>
                    <div className={styles.info}>
                        <Image src={agency.image} height={70} width={70} className={styles.image}/>
                        <div className={styles.rightSide}>
                            <span className={styles.agencyName}>{agency.title}</span>
                            <span className={styles.description}>{agency.description}</span>

                            <div className={styles.buttonContainer}>
                                <button className={styles.button} onClick={handleDrawerOpen}>Contact</button>
                            </div>
                        </div>
                     
                    </div>
                    
                    <ContactDrawer isDrawerOpen={isDrawerOpen} closeDrawer={()=> setIsDrawerOpen(false)}/>
                </div>
            ))}
          
        </div>
    );
}
 
export default Agency;