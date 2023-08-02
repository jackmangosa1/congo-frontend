import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Categories from '../components/Categories'
import SquareCard from '../components/SquareCard'
import Cards from "../components/Cards"
import PlanTrip from '../components/PlanTrip'
import Gallerie from '../components/Gallerie'
import Hero from '../components/Hero'




export default function Home() {
  const placesToGo = [
    {id: 1, title: 'Kinshasa', image: '/placesToGo/kinshasa.jpg'},
    {id: 2, title: 'Goma', image: '/placesToGo/Goma.jpg' },
    {id: 3, title: 'Lubumbashi', image: '/placesToGo/Lubumbashi.jpg'},
    {id: 4, title: 'Kisangani', image: '/placesToGo/Kisangani.jpg'},
  ]

const placesCategories = [
    {id: 1, title: 'Popular'},
    {id: 2, title: 'Cities'},
    {id: 3, title: 'Nature'},
    {id: 4, title: 'Islands'},
    {id: 5, title: 'Beaches'},
]

const thingsToDo = [
  {id: 1, title: 'Events', image: '/thingsToDo/festival.jpg'},
  {id: 2, title: 'Food', image: '/thingsToDo/food.jpg' },
  {id: 3, title: 'Art', image: '/thingsToDo/art.jpg'},
]

const thingsCategories = [
  {id: 1, title: 'Popular'},
  {id: 2, title: 'Nature'},
  {id: 3, title: 'Culture'},
  {id: 4, title: 'Adventure'},
  {id: 5, title: 'Family'},
]

const QuizData = {
  image: '/Quiz.jpg',
  title: 'Find your perfect holiday match',
  description: 'Here’s a list of Ruby’s curated holiday highlights picked just for you!',
  callToAction: 'Take quiz'
}
  return (
    <div>
      <Hero/>
      <Categories/>
      <SquareCard 
      image={QuizData.image} 
      title={QuizData.title} 
      description={QuizData.description} 
      callToAction={QuizData.callToAction}
      />
      <Cards
      items={placesToGo}
      categories= {placesCategories}
      title= "Places to go"
      />
      <Cards
      items={thingsToDo}
      categories={thingsCategories}
      title= "Things to do"
      />
      <PlanTrip/>
      <Gallerie/>
    </div>
  )
}
