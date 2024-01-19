import styles from "../styles/TownHomePage.module.css"
import Image from "next/image";
import TopToDoInCity from "./TopToDoInCiTy";
import Card from "./Cards"

const TownHomePage = ({image, title, description}) => {
    const placesToGo = [
        {id: 1, title: 'Kinshasa', image: '/placesToGo/kinshasa.jpg'},
        {id: 2, title: 'Goma', image: '/placesToGo/Goma.jpg' },
        {id: 3, title: 'Lubumbashi', image: '/placesToGo/Lubumbashi.jpg'},
        {id: 4, title: 'Kisangani', image: '/placesToGo/Kisangani.jpg'},
      ]
    return (  
        <div className={styles.container}>
            <Image src={image} height={450} width={500} alt=""/>
            <span className={styles.title}>Guide to {title}</span>
            <p className={styles.description}>
            {description}
            </p>
            <Card items={placesToGo} title={`${title} bars and restaurants`}/>
            <Card items={placesToGo} title={`${title} travel planner`}/>

        </div>
    );
}
 
export default TownHomePage;