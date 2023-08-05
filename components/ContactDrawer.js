import { useDisclosure } from '@mantine/hooks';
import { Drawer, TextInput, NumberInput } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import styles from "../styles/ContactDrawer.module.css"
import { useState } from 'react';



const ContactDrawer = ({isDrawerOpen, closeDrawer}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const showCalendar = () =>{
    setIsCalendarVisible(prevState => !prevState)
  }

  return (
    <div className={styles.container}>
      <Drawer opened={isDrawerOpen} onClose={closeDrawer} position="bottom" size="100%">
        <span className={styles.title}>Contact the Agency</span>
        <div className={styles.form}>
            <TextInput label="Name" placeholder="Your name"  required/>
            <TextInput label="Email" placeholder="Your email"  required/>
            <TextInput label="Phone" placeholder="Your phone"/>
            <div className={styles.row}>
                <TextInput label="Indicative dates" placeholder="Depart" onClick={showCalendar} required/>
                <TextInput label="Optional" onClick={showCalendar} placeholder="Return"/>
            </div>
            {isCalendarVisible && (
                <Calendar/>
            )}
            <TextInput label="Destination of Interest"  required/>
            <div className={styles.row}>
                <NumberInput label="Adult traveller" required/>
                <NumberInput label="Traveller under 18" required/>
            </div>

            <button className={styles.button}>Send Email</button>

        </div>

      </Drawer>
      

      
    </div>
  );
}

export default ContactDrawer;