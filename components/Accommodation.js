import Image from "next/image";
import styles from "../styles/Accommodation.module.css"
import { UilCamera,  UilArrowUpRight, UilCornerUpLeft, UilCornerUpRight  } from '@iconscout/react-unicons'
import Link from "next/link";

const Accommodation = () => {
    const data = [
        {
            title:'Serena Hotel', 
            image:'/room1.jpg', 
            source:'EOS by SkyCity, Adelaide, South Australia © SkyCity',
            topTipImage:'/room1.jpg', 
            topTipText:'For the ultimate in-room indulgence, have the on-call mixologist create your favourite cocktail right in your room as part of the hotel’s Signature Experiences.', 
            description:'With its marble floors, plush furnishings, and original artworks, EOS by SkyCity oozes modern luxury at every turn. The rooms and suites are elegant and modern, with spacious bathrooms, luxury amenities, intuitive technology, and sprawling views. Head to the Leisure Deck for the heated outdoor pool complete with poolside dining on offer, spa pool, sauna, steam room, gym, and wellness spa. Part of the newly transformed SkyCity Adelaide, the hotel is minutes from the casino, convention centre and popular shopping precinct of Rundle Mall.', 
            smallImage:'/room1.jpg', 
            price:'300USD',
            link:'https://skycityadelaide.com.au/hotel/eos-by-skycity/',
        },

        {
            title:'Rotanna Hotel', 
            image:'/room2.jpg', 
            source:'EOS by SkyCity, Adelaide, South Australia © SkyCity',
            topTipImage:'/room1.jpg', 
            topTipText:'For the ultimate in-room indulgence, have the on-call mixologist create your favourite cocktail right in your room as part of the hotel’s Signature Experiences.', 
            description:'With its marble floors, plush furnishings, and original artworks, EOS by SkyCity oozes modern luxury at every turn. The rooms and suites are elegant and modern, with spacious bathrooms, luxury amenities, intuitive technology, and sprawling views. Head to the Leisure Deck for the heated outdoor pool complete with poolside dining on offer, spa pool, sauna, steam room, gym, and wellness spa. Part of the newly transformed SkyCity Adelaide, the hotel is minutes from the casino, convention centre and popular shopping precinct of Rundle Mall.', 
            smallImage:'/room1.jpg', 
            price:'200USD',
            link:'https://skycityadelaide.com.au/hotel/eos-by-skycity/',
        },

        {
            title:'Pullman Hotel', 
            image:'/room2.jpg', 
            source:'EOS by SkyCity, Adelaide, South Australia © SkyCity',
            topTipImage:'/room1.jpg', 
            topTipText:'For the ultimate in-room indulgence, have the on-call mixologist create your favourite cocktail right in your room as part of the hotel’s Signature Experiences.', 
            description:'With its marble floors, plush furnishings, and original artworks, EOS by SkyCity oozes modern luxury at every turn. The rooms and suites are elegant and modern, with spacious bathrooms, luxury amenities, intuitive technology, and sprawling views. Head to the Leisure Deck for the heated outdoor pool complete with poolside dining on offer, spa pool, sauna, steam room, gym, and wellness spa. Part of the newly transformed SkyCity Adelaide, the hotel is minutes from the casino, convention centre and popular shopping precinct of Rundle Mall.', 
            smallImage:'/room1.jpg', 
            price:'300USD',
            link:'https://skycityadelaide.com.au/hotel/eos-by-skycity/',
        },
    ]

    return ( 
        <div className={styles.container}>
            {data.map( accommodation =>{
                return (
                    <div className={styles.accomodation}>
                        <span className={styles.title}>{accommodation.title}</span>
                        <Image src={accommodation.image} height={300} width={500} className={styles.accommodationImage} />
                        <div className={styles.reference}>
                            <UilCamera size="20" color="var(--themeGray)" />
                            <span>{accommodation.source}</span>
                        </div>
                        <div className={styles.bigTopTipContainer}>
                            <Image src="/curved-arrow-right.svg" height={100} width={50} className={styles.arrow}/>
                        
                            <div className={styles.bigTopTip}>
                                
                                <Image src={accommodation.topTipImage} height={90} width={90} className={styles.tipImage} />
                                <div className={styles.tipText}>
                                    <span>Top Tip</span>
                                    <p>{accommodation.topTipText}</p>
                                </div>
                            </div>
                        </div>
                       

                        <div className={styles.topTip}>
                            <Image src={accommodation.topTipImage} height={90} width={90} className={styles.tipImage} />
                            <div className={styles.tipText}>
                                <span>Top Tip</span>
                                <p>{accommodation.topTipText}</p>
                            </div>
                        </div>
                        <p>{accommodation.description}</p>
                        <div className={styles.redirection}>
                            <Image src={accommodation.smallImage} height={100} width={150} />
                            <div className={styles.rightSide}>
                                <span>{accommodation.title}</span>
                                <Link href={accommodation.link} target="_blank">
                                    <div className={styles.price}>
                                        From <span>{accommodation.price}</span>
                                        <UilArrowUpRight size="25" className={styles.redirectIcon} />
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                );
            })}
            
        </div>
     );
}
 
export default Accommodation;