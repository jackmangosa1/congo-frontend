import Image from "next/image";
import styles from "../styles/DealsAndTravelPackages.module.css"
import Cards from "../components/Cards"

const Packages = () => {
    const placesToGo = [
        {id: 1, title: 'Find accommodation', image: '/placesToGo/kinshasa.jpg', link: '/find-accommodation'},
        {id: 2, title: 'Find transportation', image: '/placesToGo/Goma.jpg' , link:'/find-transportation'},
      ]
    return ( 
        <div className={styles.container}>
            <Image src="/agent.jpg" height={300} width={500} className={styles.image} alt=""/>
            <span className={styles.title}>DEALS AND TRAVEL PACKAGES</span>
            <p className={styles.description}>
Looking for a travel deal? Check out these deals and special offers to make your Congolese holiday effortless and unforgettable. Terms and conditions apply.</p>
            <Cards items={placesToGo} title="Make your holidday happen"/>
        </div>
     );
}
 
export default Packages;