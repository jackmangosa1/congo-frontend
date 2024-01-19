import Image from "next/image";
import { Accordion, rem } from '@mantine/core';
import { UilPlus, UilInstagram, UilFacebookF, UilYoutube,  UilArrowUp  } from '@iconscout/react-unicons'
import styles from "../styles/VisaAndEntryRequirements.module.css"
import Link from "next/link";

const VisaAndEntry = () => {
    return ( 
        <div className={styles.container}>
            <Image src="/Entry.jpg" height={300} width={500} className={styles.image}/>
            <span className={styles.title}>CONGOLESE VISA AND ENTRY REQUIREMENTS FAQS</span>
            <p className={styles.description}>
                Learn about visa requirements for entry to Australia for tourism purposes with this list of frequently asked questions. 
            </p>
            <p className={styles.disclaimer}>
            Please note this page is intended to provide general information only and does not constitute legal advice. Tourism Australia is not the Australian government visa granting authority. For information on visas to enter Australia, visitors should seek the most up-to-date information from Australian Government Department of Home Affairs.*
            </p>
            <div className={styles.tipsContainer}>
                
                <ul className={styles.tips}>
                <p>Ready to plan your trip? We&apos;re ready to welcome you! Here are some helpful tips for getting your visa sorted:</p>
                    <li>Be sure to secure the appropriate visa before travelling to Australia. Use the Visa Finder to explore your options.</li>
                    <li>Ensure all details are correct and provide all required documents when you apply. An incomplete or incorrect application can delay your visa.</li>
                    <li>Submitting multiple applications at the same time can slow the process. For visitor visas, submit one application per person, including children. </li>
                    <li>Questions? The Australian Government&apos;s Global Service Centre can help</li>
                </ul>

                <div className={styles.accordionContainer}>
                    <span className={styles.title}>CONNGOLESE VISA INFORMATION</span>
                    <Accordion 
                        className={styles.accordion}
                        defaultValue="language"
                        chevron={<UilPlus size="40"/>}
                        styles={{
                            chevron: {
                            '&[data-rotate]': {
                                transform: 'rotate(45deg)',
                            },
                            },
                            
                            control: {
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(225, 255, 255, 0.5)',
                                },
                                '&[data-active]': {
                                    backgroundColor: 'rgba(225, 255, 255, 0.5)',
                                },
                            },
                            item: {
                                color: 'white',
                            },
                        }}
            >
            <Accordion.Item value="language">
                <Accordion.Control  className={styles.accordionControl}>Do I need visa to enter Congo?</Accordion.Control>
                <Accordion.Panel className={styles.accordionPanel}>
                Unless you are an Australian citizen, you will need a valid Australian visa to enter the country. New Zealand passport holders can apply for a visa upon arrival in the country. All other passport holders, regardless of age, must apply for a visa before leaving home. You can apply for a range of Australian visa types, including tourist visas and working holiday visas, via the ETA app or on the Department of Home Affairs website.
                </Accordion.Panel>
                
            </Accordion.Item>

            <Accordion.Item value="media">
                <Accordion.Control className={styles.accordionControl}>What type of tourist visa does Congo have?</Accordion.Control>
                <Accordion.Panel className={styles.accordionPanel}>
                There are different Australian visa types available for travellers to Australia. Knowing which Australian visa to apply for depends on the length of your stay, your passport and the purpose of your visit. You’ll also need to meet certain financial and medical requirements, be outside of Australia when applying and maintain health insurance for the duration of your stay. 

                Electronic Travel Authority visa (subclass 601)
                This visa allows you to visit Australia as many times as you want, for up to a year, and stay for three months each visit. This visa is available to passport holders from a number of countries and regions, who live outside Australia. A step-by-step guide on how to apply is here.

                All ETA-eligible passport holders must apply for an ETA using the Australian ETA app. Agents can assist you in the application process, but you must be physically present as a live facial image is required.

                eVisitor (subclass 651)
                This is a free visa for multiple visits to Australia for tourism or business purposes for up to three months at a time within a 12-month period. This visa is available to passport holders from a number of European countries and it cannot be extended.

                Visitor visa (subclass 600)
                The Visitor visa allows you to visit Australia, either for tourism or business purposes. It is open to all nationalities. Generally, a period of stay of up to three months is granted, but up to 12 months may be granted in certain circumstances. Applicants will have to pay a fee to submit their application.
                    
                </Accordion.Panel>
        
                <Accordion.Panel className={styles.accordionPanel}>
                    The application process may differ depending on which visa you need.

                    You can only apply for the Electronic Travel Authority visa (subclass 601) through the Australian ETA app. A step-by-step guide on how to apply is located here.

                    For other visas, you can apply online by creating an ImmiAccount and completing the application process. Be sure to submit your application well in advance of your travel date to allow enough time for processing. You may be asked to provide further supporting information. You will be notified in writing if your tourist visa is approved and it will be digitally linked to your passport. For more information on different visa types, and Australian visa requirements including how to apply for an Australian visa, visit the Department of Home Affairs website.
                </Accordion.Panel>
                
            </Accordion.Item>

            <Accordion.Item value="about">
                <Accordion.Control className={styles.accordionControl}>How can I apply to Congolese tourit visa</Accordion.Control>
                <Accordion.Panel className={styles.accordionPanel}>
                The application process may differ depending on which visa you need.

                You can only apply for the Electronic Travel Authority visa (subclass 601) through the Australian ETA app. A step-by-step guide on how to apply is located here.

                For other visas, you can apply online by creating an ImmiAccount and completing the application process. Be sure to submit your application well in advance of your travel date to allow enough time for processing. You may be asked to provide further supporting information. You will be notified in writing if your tourist visa is approved and it will be digitally linked to your passport. For more information on different visa types, and Australian visa requirements including how to apply for an Australian visa, visit the Department of Home Affairs website.
                </Accordion.Panel>
               
            </Accordion.Item>

            <Accordion.Item value="other-sites">
                <Accordion.Control className={styles.accordionControl}>Can I extemd visitor visa</Accordion.Control>

                <Accordion.Panel className={styles.accordionPanel}>
                If you are already in Australia and hold a valid Electronic Travel Authority visa (subclass 601) you can extend your stay by applying for another visa, such as a Visitor visa (subclass 600). An eVisitor (subclass 651) cannot be extended.

                See the Department of Home Affairs website for details.
                </Accordion.Panel>

            </Accordion.Item>
            </Accordion>

                </div>
            </div>
        </div>
     );
}
 
export default VisaAndEntry;