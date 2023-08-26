import BasicAccordion from "../Accordion/Accord";
import Crousel from "../Card/Crousel";
import Plan from "../Plan/Plan";
import HeroSection from "./HeroSection";
import Timeline from "./Timeline";
import ServiceHome from "./seviceHome";
import Testimonial from "./testimonial";



export default function Home(){

    return(
        <>
        <HeroSection/>
        <ServiceHome/>
        {/* <Plan/> */}
        <Crousel/>
        <Timeline/>
        <Testimonial/>
        </>
    )
}