import { UilBars, UilHeart, UilTimes, UilSearch, UilAngleDown, UilUser } from '@iconscout/react-unicons';
import Image from 'next/image';
import Congo from '../assets/Congo.png';
import Logo from '../assets/Congo-logo.png'
import styles from '../styles/Header.module.css';
import { useState } from 'react';
import SideBar from './SideBar';
import {useRouter} from "next/router";
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';


const Header = () =>{

    const router = useRouter()
    const [isSideBarVisible, setIsSideBarVisible] = useState(false)
    const [openedDrawer1, { open: openDrawer1, close: closeDrawer1 }] = useDisclosure(false);
    const [openedDrawer2, { open: openDrawer2, close: closeDrawer2 }] = useDisclosure(false);
    const [openedDrawer3, { open: openDrawer3, close: closeDrawer3 }] = useDisclosure(false);
    const [openedDrawer4, { open: openDrawer4, close: closeDrawer4 }] = useDisclosure(false);
    const [openedDrawer5, { open: openDrawer5, close: closeDrawer5 }] = useDisclosure(false);

    const inspirationData = [
        {id: 1, title: 'Say mbote!', image: '/inspiration/animals.jpg', link:'/travel-inspiration'},
        {id: 2, title: 'Discover Congo', image: '/Rwenzori.jpg', link: '/deals-and-travel-packages'},
        {id: 3, title: 'Deals and offer', image: '/Tchegera.jpg', link: '/deals-and-travel-packages'},
      ]
      
      const placesToGo = [
        {id: 1, title: 'Kinshasa', image: '/placesToGo/kinshasa.jpg'},
        {id: 2, title: 'Goma', image: '/placesToGo/Goma.jpg' },
        {id: 3, title: 'Lubumbashi', image: '/placesToGo/Lubumbashi.jpg'},
        {id: 4, title: 'Kisangani', image: '/placesToGo/Kisangani.jpg'},
      ]
      
      const thingsToDo = [
        {id: 1, title: 'Events', image: '/thingsToDo/festival.jpg'},
        {id: 2, title: 'Food', image: '/thingsToDo/food.jpg' },
        {id: 3, title: 'Art', image: '/thingsToDo/art.jpg'},
      ]
    return(
        <div className={styles.container}>
            <div className={styles.smallContainer}>
                {isSideBarVisible 
                ? <UilTimes size="30" onClick={() =>setIsSideBarVisible(false)}/>
                :<UilBars size="30" onClick={() =>setIsSideBarVisible(true)}/> 
                }
                <Image src={Logo} height={40} width={100} alt="logo" onClick={() =>router.push('/')}/>
                <div className={styles.navElements}>
                    <Image src={Congo} alt="congo-map" height={30} width={30} onClick={()=> router.push('/explore')}/>
                    <UilHeart size="30"/>
                </div>
                {isSideBarVisible && <SideBar/>}
            </div>
            <div className={styles.bigContainer}>
                <Image src={Logo} height={40} width={100} alt="logo" onClick={() =>router.push('/')}/>
                <ul className={styles.list}>
                    <li className={styles.item} onClick={openDrawer1}>
                        Be inspired
                        <UilAngleDown size="30"/>
                    </li>
                    <li className={styles.item} onClick={openDrawer2}>
                        Places to go
                        <UilAngleDown size="30"/>
                    </li>
                    <li className={styles.item} onClick={openDrawer4}>
                        Things to do
                        <UilAngleDown size="30"/>
                    </li>
                    <li className={styles.item} onClick={openDrawer5}>
                        Plan your trip
                        <UilAngleDown size="30"/>
                    </li>
                </ul>
                    <div className={styles.navElements}>
                        <Image src={Congo} alt="congo-map" height={30} width={30} onClick={()=> router.push('/explore')}/>
                        <UilHeart size="30"/>
                        <UilUser size="30"/>
                        <UilSearch size="30"/>
                    </div>
                    <Drawer opened={openedDrawer1} onClose={closeDrawer1} position="top" size="60%">
                        <div className={styles.categoryContainer}>
                            {inspirationData.map( category =>{
                            return(
                                <div className={styles.category} key={category.id}>
                                    <p className={styles.categoryTitle}>{category.title}</p>
                                    <Image src={category.image} width={300} height={180} className={styles.categoryImage} alt="category-image"/>
                                </div>
                            )
                            })}
                        </div>
                    </Drawer>

                    <Drawer opened={openedDrawer2} onClose={closeDrawer2} position="top" size="60%">
                        <div className={styles.categoryContainer}>
                            {placesToGo.map( category =>{
                            return(
                            <div className={styles.category} key={category.id}>
                                <p className={styles.categoryTitle}>{category.title}</p>
                                <Image src={category.image} width={300} height={180} className={styles.categoryImage} alt="category-image"/>
                            </div>
                             )
                            })}
                        </div>
                    </Drawer>

                    <Drawer opened={openedDrawer3} onClose={closeDrawer3}  position="top" size="60%">
                        <div className={styles.categoryContainer}>
                            {thingsToDo.map( category =>{
                            return(
                                <div className={styles.category} key={category.id}>
                                    <p className={styles.categoryTitle}>{category.title}</p>
                                    <Image src={category.image} width={300} height={180} className={styles.categoryImage} alt="category-image"/>
                                </div>
                            )
                            })}
                        </div>
                    </Drawer>

                    <Drawer opened={openedDrawer4} onClose={closeDrawer4}  position="top" size="60%">
                        <div className={styles.categoryContainer}>
                            {thingsToDo.map( category =>{
                            return(
                                <div className={styles.category} key={category.id}>
                                    <p className={styles.categoryTitle}>{category.title}</p>
                                    <Image src={category.image} width={300} height={180} className={styles.categoryImage} alt="category-image"/>
                                </div>
                            )
                            })}
                        </div>
                    </Drawer>

                    <Drawer opened={openedDrawer5} onClose={closeDrawer5}  position="top" size="60%">
                        <div className={styles.categoryContainer}>
                            {inspirationData.map( category =>{
                            return(
                                <div className={styles.category} key={category.id}>
                                    <p className={styles.categoryTitle}>{category.title}</p>
                                    <Image src={category.image} width={300} height={180} className={styles.categoryImage} alt="category-image"/>
                                </div>
                            )
                            })}
                        </div>
                    </Drawer>
            </div>

           
        </div>
    )
}

export default Header;