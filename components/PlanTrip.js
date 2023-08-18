import styles from "../styles/PlanTrip.module.css"
import Image from "next/image";
import Rwenzori from "../public/Rwenzori.jpg"
import { useRouter } from "next/router";

const PlanTrip = () => {
    const router = useRouter()
    const articles = [
        {id: 1, title: 'Border status and entry information', image: '/Rwenzori.jpg', link: 'deals-and-travel-packages'},
        {id: 3, title: 'Congolese visa and entry FAQs', image: '/Entry.jpg', link:'/visa-and-entry-requirements'},
        {id: 2, title: 'Deals and travel packages', image: '/inspiration/beach.jpg', link: 'deals-and-travel-packages'},
      ]

    return (  
        <div className={styles.container}>
            <div className={styles.title}>Ready to plan your trip</div>
            <div className={styles.articles}>
                {articles.map( article =>(
                    <div key={article.id} className={styles.article} onClick={() => router.push(article.link)}> 
                        <Image src={article.image} height={150} width={200} className={styles.articleImage}/>
                        <span className={styles.articleTitle}>{article.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default PlanTrip;