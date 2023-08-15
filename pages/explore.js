import dynamic from "next/dynamic";


const DynamicCongoMap = dynamic(
    () => import('../components/CongoMap'),
    { ssr: false }
)


const Explore = () => {
    return (
        <div>
            <DynamicCongoMap/>
        </div>
      );
}
 
export default Explore;