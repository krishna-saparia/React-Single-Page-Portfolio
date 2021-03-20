import React, {useState} from 'react'
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne} from '../Components/InfoSection/Data';
import Services from '../Components/Services';
// import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
// import Resume from '../Components/ResumeSection';
import SkillComp from '../Components/SkillComp'
import Footer from '../Components/Footer/Index';
// import Education from '../Components/Education';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
         <Sidebar isOpen={isOpen} toggle = {toggle} />   
         <Navbar toggle={toggle}/>
         <HeroSection />
         <InfoSection {...homeObjOne}/>
         {/* <Resume/> */}
         {/* <Education /> */}
         <Services />
         <SkillComp />
         <Footer />
         {/* <InfoSection {...homeObjThree}/> */}
        </>
    )
}

export default Home;
