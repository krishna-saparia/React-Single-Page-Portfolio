import React , {useState} from 'react';

import svg7 from '../../images/svg7.svg'
import {Button} from '../ButtonElement';
import { HeroContainer, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroContent, Avatar } from './HeroElememts';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroContent>
            <Avatar src= {svg7} alt='avatar'/>
                <HeroH1>
                    krishna.is()
                </HeroH1>
                <HeroP>
                    Full Stack Web Developer
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to = 'about' 
                    onMouseEnter = {onHover} 
                    onMouseLeave = {onHover} 
                    primary='true' 
                    dark='true'
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset= {-80}
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
