import styles from "../styles/EventCalendar.module.css";
import Festival from "../public/festival.jpg";
import Image from "next/image";
import SquareCard from "../components/SquareCard";
import { UilSearch } from '@iconscout/react-unicons';
import { Select, TextInput } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useState } from "react";
import Events from "../components/Events";
import Cards from "../components/Cards"


const EventCalender = () => {

    const placesToGo = [
        {id: 1, title: 'Kinshasa', image: '/placesToGo/kinshasa.jpg'},
        {id: 2, title: 'Goma', image: '/placesToGo/Goma.jpg' },
        {id: 3, title: 'Lubumbashi', image: '/placesToGo/Lubumbashi.jpg'},
        {id: 4, title: 'Kisangani', image: '/placesToGo/Kisangani.jpg'},
      ]
    const [isCalendarVisible, setIsCalenderVisible] = useState(false)
    const showCalendar = () =>{
        setIsCalenderVisible(prevState => !prevState)
    }



    const data = {
        image: '/Martyrs.jpg',
        title: 'Francophonie Games',
        description: "Kinshasa will be pulsating with the IX Games of La Francophonie.",
        callToAction: 'Find out more'
      }

    return ( 
        <div className={styles.container}>
            <div className={styles.hero}>
                <video src="/francophonie.mp4" autoPlay loop muted className={styles.heroVideo}/>
            </div>

            <div className={styles.mainText}>
                <span>Major event calendar</span>
                <span>To help plan your holiday around the fantastic range of events and festivals across the country, start by searching specific dates and interests in the calendar below.</span>
            </div>

            <SquareCard 
                image={data.image} 
                title={data.title} 
                description={data.description} 
                callToAction={data.callToAction}
                className={styles.squareCard}
            />
            <span className={styles.title}>Featured Events</span>
            <div className={styles.eventFiltersContainer}>
                <TextInput
                icon={<UilSearch size="17"/>}
                placeholder="Keyword search"
                />
                <Select
                    defaultValue='all-experiences'
                    data={[
                        { value: 'all-experiences', label: 'All Experiences' },
                        { value: 'art-and-exhibition', label: 'Art & Exhibition' },
                        { value: 'culture-and-community', label: 'Culture & Community' },
                        { value: 'food-and-drink', label: 'Food & Drink' },
                        { value: 'music', label: 'Music' },
                        { value: 'nature-and-wildlife', label: 'Nature & WildLife' },
                    ]}
                    className={styles.select}
                />
                <TextInput
                    placeholder="Date Range"
                
                    onClick={showCalendar}
                />
                {isCalendarVisible && (
                    <Calendar className={styles.calendar}/>
                )}
            </div>
            <Events/>
            <div className={styles.buttonWrapper}>
                <span>Showing 3 of 20 results</span>
                <button className={styles.button}>Load More</button>
            </div>
           
            <Cards items={placesToGo} title= "More articles like this " />
        </div>
     );
}
 
export default EventCalender;