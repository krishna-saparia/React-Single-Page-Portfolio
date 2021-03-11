import React from 'react';
import AR from '../../images/AR.svg';
import game from '../../images/game.svg';
import employee from '../../images/employee.svg';
import block from '../../images/block.svg';
import list from '../../images/list.svg';
import tvshow from '../../images/tvshow.svg';

import {
    ServiceContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesH1,
    ServicesP
} from './ServiceElement';
const Services = () => {
    return (
        <>
         <ServiceContainer id='projects'>
             <ServicesH1>Projects</ServicesH1>
             <ServicesWrapper>
                 <ServicesCard>
                     <ServicesIcon src= {AR}/>
                     <ServicesH2>Creates 3D Virtual Plan </ServicesH2>
                     <ServicesP> Markerbased AR app built on Unity and Vuforia.</ServicesP> 
                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src= {game}/>
                     <ServicesH2>The Injured Pilot </ServicesH2>
                     <ServicesP> Developed 2D Game Using Unity 2019.</ServicesP> 
                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src= {employee}/>
                     <ServicesH2>Employee manager Web app</ServicesH2>
                     <ServicesP> Created using angular 10 and spring boot as backend to handle database.</ServicesP> 
                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src= {block}/>
                     <ServicesH2>The Block Breaker</ServicesH2>
                     <ServicesP> A 2D game built using Unity.</ServicesP> 
                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src= {list}/>
                     <ServicesH2>To Do Grocery List</ServicesH2>
                     <ServicesP> Web App allows user to manage their grocery List- Built on Express JS and SQlite Database</ServicesP> 
                 </ServicesCard>
                 <ServicesCard>
                     <ServicesIcon src= {tvshow}/>
                     <ServicesH2>TV-Show</ServicesH2>
                     <ServicesP> Allows user to search and see any TV show using TV-Maze api.</ServicesP> 
                 </ServicesCard>
             </ServicesWrapper>
         </ServiceContainer>   
        </>
    )
}

export default Services