import React from 'react';
// import { Button } from '../ButtonElement';
import svg10 from '../../images/svg10.svg';
import {InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine,
    Heading,  
    BtnWrap, 
    ImgWrap,
    Button, 
    Img} from './ResumeElement';
const Resume = ({lightBg, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
        <InfoContainer lightBg={lightBg} id='resume' >
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine> resume(); </TopLine>
                        <Heading lightText={lightText}> Download Resume </Heading>
                        {/* <SubTitle darkText={darkText}> {description} </SubTitle> */}
                        <BtnWrap>
                            {/* <a href = "https://drive.google.com/file/d/1DnW8haKxM1taAdk5hFdLoYWTiWZ_tDvl/view?usp=sharing" target="mynewtab"> */}
                            <Button to='resume'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 : 0}
                            dark={dark ? 1 : 0}
                            dark2= {dark2 ? 1 : 0}
                            >Download</Button>
                            {/* </a> */}
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={svg10} alt='resume'/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>  
    </>
    )
}

export default Resume
