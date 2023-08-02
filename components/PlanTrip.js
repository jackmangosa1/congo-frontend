import styles from "../styles/PlanTrip.module.css"
import Image from "next/image";
import Rwenzori from "../public/Rwenzori.jpg"

const PlanTrip = () => {

    const articles = [
        {id: 1, title: 'Congolese visa and entry requirements FAQs', image: '/Entry.jpg'},
        {id: 2, title: 'Deals and travel packages', image: '/inspiration/beach.jpg' },
      ]

    return (  
        <div className={styles.container}>
            <span className={styles.title}>Ready to plan your trip?</span>
            <Image src={Rwenzori} height={300} width={440} className={styles.bigImage}/>
            <span className={styles.subtitle}>Border status and entry information</span>

            <div className={styles.articles}>
                {articles.map( article =>(
                    <div key={article.id} className={styles.article}> 
                        <Image src={article.image} height={150} width={200} className={styles.articleImage}/>
                        <span className={styles.articleTitle}>{article.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default PlanTrip;