import Image from "next/image";
import styles from "../styles/Accommodation.module.css"
import { UilCamera,  UilArrowUpRight } from '@iconscout/react-unicons'
import { useRouter } from "next/router";
const FoodAndDrinks = () => {
    const router = useRouter()
    const data = [
        {
            title:'Ntaba na Kwanga', 
            image:'/thingsToDo/food.jpg', 
            source:'EOS by SkyCity, Adelaide, South Australia © SkyCity',
            description:'Some travellers choose to decrease their environmental footprint by consuming fewer (or no) animal products. Luckily, Australia has the freshest of farmed produce. Vegan and vegetarian restaurants are now found all over Australia, from cities to small towns, and some have been awarded with the highest of dining accolades.', 
            link:'https://skycityadelaide.com.au/hotel/eos-by-skycity/',
        },

        {
            title:'Poulet mayo', 
            image:'/food2.jpg', 
            source:'EOS by SkyCity, Adelaide, South Australia © SkyCity',
            description:'Some travellers choose to decrease their environmental footprint by consuming fewer (or no) animal products. Luckily, Australia has the freshest of farmed produce. Vegan and vegetarian restaurants are now found all over Australia, from cities to small towns, and some have been awarded with the highest of dining accolades.', 
            link:'https://skycityadelaide.com.au/hotel/eos-by-skycity/',
        },

        {
            title:'Ntaba na Kwanga', 
            image:'/thingsToDo/food.jpg', 
            source:'EOS by SkyCity, Adelaide, South Australia © SkyCity',
            description:'Some travellers choose to decrease their environmental footprint by consuming fewer (or no) animal products. Luckily, Australia has the freshest of farmed produce. Vegan and vegetarian restaurants are now found all over Australia, from cities to small towns, and some have been awarded with the highest of dining accolades.', 
            link:'https://skycityadelaide.com.au/hotel/eos-by-skycity/',
        },
    ]

    return ( 
        <div className={styles.container}>
            {data.map( dish =>(
                <div>
                    <span className={styles.title}>{dish.title}</span>
                    <Image src={dish.image} height={450} width={450} className={styles.accommodationImage}/>
                    <div className={styles.reference}>
                        <UilCamera size="20" color="var(--themeGray)"/>
                        <span>{dish.source}</span>
                    </div>
                   
                    <p>{dish.description}</p>
                    <button className={styles.button} onClick={() => router.push(dish.link)}>Try the food</button>
                </div>
            ))}
            
        </div>
     );
}
 
export default FoodAndDrinks;