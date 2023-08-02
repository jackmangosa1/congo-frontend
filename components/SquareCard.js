import Image from "next/image";
import quizImage from '../public/Quiz.jpg'
import styles from "../styles/SquareCard.module.css"


const SquareQuiz = ({image, title, description, callToAction}) => {
    return (
        <div className={styles.container}>
            <Image src={image} alt="image" height={350} width={450} className={styles.image}/>
            <div className={styles.text}>
                <span>{title}</span>
                <span>{description}</span>
                <button className={styles.button}>{callToAction}</button>
            </div>
           
        </div>
     );
}
 
export default SquareQuiz;