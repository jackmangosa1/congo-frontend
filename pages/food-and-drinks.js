import styles from "../styles/WhereToStay.module.css"
import Image from "next/image";
import Food from "../components/FoodAndDrinks";
const FoodAndDrinks = () => {
   
    return (  
        <div>
            <Image src="/food2.jpg" width={500} height={450}/>
            <span className={styles.title}>Best Congolese food experiences</span>
            <p className={styles.description}>
            Congolese clean environment and glorious weather help grow some of the world’s most delicious and healthy produce. And the country's chefs, producers, farmers and Indigenous guides are all doing their part to make sure Australia’s food and drinks are easy on the environment. Here’s how to dine deliciously – and sustainably – in Australia.
            </p>
            <Food/>

        </div>
    );
}
 
export default FoodAndDrinks;