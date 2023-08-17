import Image from "next/image";
import styles from "../styles/SquareCard.module.css"


const SquareQuiz = ({image, title, description, callToAction}) => {
    return (
        <div className={styles.container}>
            <Image src="/Okapi.webp" alt="image" height={330} width={350} className={styles.image}/>
            <div className={styles.text}>
                <span>{title}</span>
                <span>{description}</span>
                <button className={styles.button}>{callToAction}</button>
            </div>
           
        </div>
     );
}
 
export default SquareQuiz;