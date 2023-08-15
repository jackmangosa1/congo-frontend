import Event from "../components/EventPage";
const EventPage = () => {
    const data = {id: 1, title: 'Nsele', image: '/Tchegera.jpg', description: "Throughout Australia, vibrant design communities make our cities' neighbourhoods a delight to discover. But the artistry doesn't end there. The innovation you'll find in so many Australian restaurants and hotels means your lunch or dinner may well turn out to be a work of art on a plate, while your hotel room might be transformed by murals, street art or elegant design. Every one of your 13 days travelling from Brisbane to Melbourne will be soaked in style."}
    return ( 
        <Event  images={data.image} title={data.title} description={data.description}/>
    )
}
 
export default EventPage;