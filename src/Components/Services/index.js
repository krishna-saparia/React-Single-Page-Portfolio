import React from 'react';
import AR from '../../images/AR.svg';
import game from '../../images/game.svg';
import employee from '../../images/employee.svg';

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
             <ServicesH1>Our Services</ServicesH1>
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
             </ServicesWrapper>
         </ServiceContainer>   
        </>
    )
}

export default Services