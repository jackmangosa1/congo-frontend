import Trip from "../components/TripPage"

const TripPage = () => {
    const data = {id: 1, title: 'Nsele', images: ['/Tchegera.jpg', '/Nsele.jpg', '/Rwenzori.jpg' ], description: "Throughout Australia, vibrant design communities make our cities' neighbourhoods a delight to discover. But the artistry doesn't end there. The innovation you'll find in so many Australian restaurants and hotels means your lunch or dinner may well turn out to be a work of art on a plate, while your hotel room might be transformed by murals, street art or elegant design. Every one of your 13 days travelling from Brisbane to Melbourne will be soaked in style."}
    return ( 
        <Trip title={data.title} images={data.images} description={data.description}/>
     );
}
 
export default TripPage;