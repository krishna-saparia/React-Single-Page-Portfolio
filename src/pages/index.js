import React, {useState} from 'react'
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../Components/InfoSection/Data';
import Services from '../Components/Services';
// import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Resume from '../Components/ResumeSection';
import SkillComp from '../Components/SkillComp'
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
         <Resume/>
         <Services />
         <SkillComp />
         {/* <InfoSection {...homeObjThree}/> */}
        </>
    )
}

export default Home;
