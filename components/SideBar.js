import styles from '../styles/SideBar.module.css';
import { UilSearch, UilAngleRightB } from '@iconscout/react-unicons';
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SideBar = () => {
  const router = useRouter()
  const [openedDrawer1, { open: openDrawer1, close: closeDrawer1 }] = useDisclosure(false);
  const [openedDrawer2, { open: openDrawer2, close: closeDrawer2 }] = useDisclosure(false);
  const [openedDrawer3, { open: openDrawer3, close: closeDrawer3 }] = useDisclosure(false);
  const [openedDrawer4, { open: openDrawer4, close: closeDrawer4 }] = useDisclosure(false);



const inspirationData = [
  {id: 1, title: 'Say mbote!', image: '/inspiration/animals.jpg', link:'/travel-inspiration'},
  {id: 2, title: 'Discover Congo', image: '/Rwenzori.jpg', link: ''},
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



  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <input type="search" placeholder="Search" className={styles.searchBar} />
        <UilSearch size="20" className={styles.searchIcon} />
      </div>
      <ul className={styles.list}>
        <li className={styles.item} onClick={openDrawer1}>
          Be inspired
          <UilAngleRightB size="30"/>
        </li>
        <li className={styles.item} onClick={openDrawer2} >
          Places to go
          <UilAngleRightB size="30"/>
        </li>
        <li className={styles.item} onClick={openDrawer3} >
          Things to do
          <UilAngleRightB size="30"/>
        </li>
        <li className={styles.item} onClick={openDrawer4} >
          Plan your trip
          <UilAngleRightB size="30" />
        </li>
        <li className={styles.item} onClick={() => router.push('/explore')}>
          Explore
        </li>
      </ul>
      <Drawer opened={openedDrawer1} onClose={closeDrawer1} position="right" size="100%">
        <div className={styles.categoryContainer}>
          {inspirationData.map( category =>{
            return(
              <div className={styles.category} key={category.id}>
                  <p className={styles.categoryTitle}>{category.title}</p>
                  <Image src={category.image} width={185} height={200} className={styles.categoryImage} alt="category-image"/>
              </div>
        
            )
          })}
        </div>
        
      </Drawer>
      <Drawer opened={openedDrawer2} onClose={closeDrawer2} position="right" size="100%">
        <div className={styles.categoryContainer}>
            {placesToGo.map( category =>{
              return(
                <div className={styles.category} key={category.id}>
                    <p className={styles.categoryTitle}>{category.title}</p>
                    <Image src={category.image} width={185} height={200} className={styles.categoryImage} alt="category-image"/>
                </div>
          
              )
            })}
          </div>
      </Drawer>
      <Drawer opened={openedDrawer3} onClose={closeDrawer3}  position="right" size="100%">
        <div className={styles.categoryContainer}>
              {thingsToDo.map( category =>{
                return(
                  <div className={styles.category} key={category.id}>
                      <p className={styles.categoryTitle}>{category.title}</p>
                      <Image src={category.image} width={185} height={200} className={styles.categoryImage} alt="category-image"/>
                  </div>
            
                )
              })}
            </div>
      </Drawer>
      <Drawer opened={openedDrawer4} onClose={closeDrawer4}  position="right" size="100%">
        {/* Drawer 4 content */}
      </Drawer>
    </div>
  );
};

export default SideBar;
