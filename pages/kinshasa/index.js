import TownHomePage from "../../components/TownHomePage";

const Kinshasa = () => {

    const data = [
        {
            id: 1, 
            title: 'Kinshasa', 
            image: '/placesToGo/kinshasa.jpg',
            descripton: "The Gold Coast's star attraction is its beaches, including the world-renowned stretch of sand at Surfers Paradise. Beyond the beaches, discover laid-back neighbourhoods, a booming culinary scene and the Gold Coast's famous theme parks. And be sure to leave enough time for a trip into the subtropical hinterland for rainforest walks and waterfalls",
        },
        {
            id: 2, 
            title: 'Goma', 
            image: '/placesToGo/Goma.jpg',
            descripton: "The Gold Coast's star attraction is its beaches, including the world-renowned stretch of sand at Surfers Paradise. Beyond the beaches, discover laid-back neighbourhoods, a booming culinary scene and the Gold Coast's famous theme parks. And be sure to leave enough time for a trip into the subtropical hinterland for rainforest walks and waterfalls"
        },
        {
            id: 3, 
            title: 'Lubumbashi', 
            image: '/placesToGo/Lubumbashi.jpg',
            descripton: "The Gold Coast's star attraction is its beaches, including the world-renowned stretch of sand at Surfers Paradise. Beyond the beaches, discover laid-back neighbourhoods, a booming culinary scene and the Gold Coast's famous theme parks. And be sure to leave enough time for a trip into the subtropical hinterland for rainforest walks and waterfalls",
        },
        {
            id: 4, 
            title: 'Kisangani', 
            image: '/placesToGo/Kisangani.jpg',
            descripton: "The Gold Coast's star attraction is its beaches, including the world-renowned stretch of sand at Surfers Paradise. Beyond the beaches, discover laid-back neighbourhoods, a booming culinary scene and the Gold Coast's famous theme parks. And be sure to leave enough time for a trip into the subtropical hinterland for rainforest walks and waterfalls"
        },
      ]
    return (  
            <TownHomePage
            image= "/placesToGo/kinshasa.jpg"
            title="Kinshasa"
            description="The Gold Coast's star attraction is its beaches, including the world-renowned stretch of sand at Surfers Paradise. Beyond the beaches, discover laid-back neighbourhoods, a booming culinary scene and the Gold Coast's famous theme parks. And be sure to leave enough time for a trip into the subtropical hinterland for rainforest walks and waterfalls"
            />
    );
}
 
export default Kinshasa;