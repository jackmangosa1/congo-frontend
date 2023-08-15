import { UilBars, UilHeart, UilTimes } from '@iconscout/react-unicons';
import Image from 'next/image';
import Congo from '../assets/Congo.png';
import Logo from '../assets/Congo-logo.png'
import styles from '../styles/Header.module.css';
import { useState } from 'react';
import SideBar from './SideBar';
import {useRouter} from "next/router"



const Header = () =>{

    const router = useRouter()
    const[isSideBarVisible, setIsSideBarVisible] = useState(false)
    return(
        <div className={styles.container}>
            {isSideBarVisible ?
            <UilTimes size="30" onClick={() =>setIsSideBarVisible(false)}/>

            :<UilBars size="30" onClick={() =>setIsSideBarVisible(true)}/> 
             }
            <Image src={Logo} height={40} width={100} alt="logo" onClick={() =>router.push('/')}/>
            <div className={styles.navElements}>
                <Image src={Congo} alt="congo-map" height={30} width={30} onClick={()=> router.push('/explore')}/>
               
                <UilHeart size="30"/>
            </div>

            {isSideBarVisible && <SideBar/>}
           
        </div>
    )
}

export default Header;