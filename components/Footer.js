import Logo from '../assets/Congo-logo.png';
import Image from 'next/image';
import styles from "../styles/Footer.module.css";
import { Accordion, rem } from '@mantine/core';
import { UilPlus, UilInstagram, UilFacebookF, UilYoutube,  UilArrowUp  } from '@iconscout/react-unicons'
import Link from 'next/link';


const Footer = () =>{


    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    return(
        <div className={styles.container}>
             <UilArrowUp size="50" color="black" className={styles.goUpIcon} onClick={scrollToTop}/>
            <h2 className={styles.logo}>Congo</h2>
            <Accordion defaultValue="language"
            chevron={<UilPlus size="20"/>}
            styles={{
                chevron: {
                '&[data-rotate]': {
                    transform: 'rotate(45deg)',
                },
                },
                
                control: {
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    },
                    '&[data-active]': {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    },
                },
                item: {
                    color: 'white',
                },
                panel: {
                    cursor: 'pointer',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                }
                
                
            }}
            >
            <Accordion.Item value="language">
                <Accordion.Control>Change the language</Accordion.Control>
                <Accordion.Panel>French</Accordion.Panel>
                <Accordion.Panel>Swahili</Accordion.Panel>
                <Accordion.Panel>Kikongo</Accordion.Panel>
                <Accordion.Panel>Tshiluba</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="media">
                <Accordion.Control>Find us on</Accordion.Control>
                <Accordion.Panel >
                    <div className={styles.accordionPanel}>
                        <UilInstagram size="20" />
                        <span>Instagram</span>
                    </div>
                   
                    
                </Accordion.Panel>
                <Accordion.Panel>
                    <div className={styles.accordionPanel}>
                        <UilFacebookF size="20" />
                        <span>Facebook</span>
                    </div>
                 

                </Accordion.Panel>
                <Accordion.Panel>
                    <div className={styles.accordionPanel}>
                        <UilYoutube size="20"/>
                        <span>Youtube</span>
                    </div>
                </Accordion.Panel>
                
            </Accordion.Item>

            <Accordion.Item value="about">
                <Accordion.Control>About this site</Accordion.Control>
                <Accordion.Panel>Privacy policy</Accordion.Panel>
                <Accordion.Panel>Terms and conditions</Accordion.Panel>
                <Accordion.Panel>Site map</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="other-sites">
                <Accordion.Control>Other Sites</Accordion.Control>

                <Accordion.Panel>
                    <Link href="https://www.investindrc.cd/fr/index.php" target="_blank" className={styles.link}>
                            Ministry of Tourism
                    </Link>
                </Accordion.Panel>
                  
                <Accordion.Panel>
                    <Link href="https://www.investindrc.cd/fr/index.php" target="_blank" className={styles.link}>
                        Invest in DRC
                    </Link>
                </Accordion.Panel>

                <Accordion.Panel>
                    
                    <Link href="https://www.investindrc.cd/fr/index.php" target="_blank" className={styles.link}>
                        Immigration Office DRC
                    </Link>
                </Accordion.Panel>

            </Accordion.Item>

            <Accordion.Item value="product-disclaimer">
                <Accordion.Control>Product Disclaimer</Accordion.Control>
                <Accordion.Panel>
                Congo.com  is not the owner, operator, advertiser or promoter of the listed products and services. Information on listed products and services, including Covid-safe accreditations, are provided by the third-party operator on their website. Rates are indicative based on the minimum and maximum available prices of products and services. Please visit the operator’s website for further information. All prices quoted are in US dollars (USD). Congo.com makes no representations whatsoever about any other websites which you may access through its websites such as Congo.com. Some websites which are linked to the Tourism Australia website are independent from Congo.com and are not under the control of Congo.com. Congo.com does not endorse or accept any responsibility for the use of websites which are owned or operated by third parties and makes no representation or warranty in relation to the standard, class or fitness for purpose of any services, nor does it endorse or in any respect warrant any products or services by virtue of any information, material or content linked from or to this site.
                </Accordion.Panel>
            </Accordion.Item>
            </Accordion>

        </div>

    )
}

export default Footer;