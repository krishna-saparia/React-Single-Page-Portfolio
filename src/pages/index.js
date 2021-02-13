import React, {useState} from 'react'
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree} from '../Components/InfoSection/Data';
import Services from '../Components/Services';
// import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Resume from '../Components/ResumeSection';
import Skills from '../Components/Skills';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const testData = [
        { bgcolor: "#6a1b9a", completed: 60 },
        { bgcolor: "#00695c", completed: 30 },
        { bgcolor: "#ef6c00", completed: 53 },
      ];
    return (
        <>
         <Sidebar isOpen={isOpen} toggle = {toggle} />   
         <Navbar toggle={toggle}/>
         <HeroSection />
         <InfoSection {...homeObjOne}/>
         {/* <InfoSection {...homeObjTwo}/> */}
         <Resume/>
         {/* <InfoSection {...homeObjThree}/> */}
         <Services />
         <InfoSection {...homeObjThree}/>
         <Skills/>
         {/* {testData.map((item, idx) => (
            <Skillbar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))} */}
        </>
    )
}

export default Home;
