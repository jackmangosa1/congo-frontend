import styles from "../styles/WhereToStay.module.css"
import Image from "next/image";
import Food from "../components/FoodAndDrinks";
const FoodAndDrinks = () => {
   
    return (  
        <div>
            <Image src="/food1.webp" width={500} height={450} className={styles.image} alt=""/>
            <span className={styles.title}>Best Congolese food experiences</span>
            <p className={styles.description}>
            Congolese clean environment and glorious weather help grow some of the world&apos;’s most delicious and healthy produce. And the country&apos;s chefs, producers, farmers and Indigenous guides are all doing their part to make sure Australia&apos;s food and drinks are easy on the environment. Here&apos;s how to dine deliciously – and sustainably – in Australia.
            </p>
            <Food/>

        </div>
    );
}
 
export default FoodAndDrinks;