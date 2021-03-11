import React from 'react'
// import { Button } from '../ButtonElement'


import {InfoContainer, 
        InfoWrapper, 
        InfoRow, 
        Column1, 
        Column2, 
        TextWrapper,
        TopLine,
        Heading, 
        SubTitle,  
        ImgWrap, 
        Img} from './InfoElement';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img, alt}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine> {topLine} </TopLine>
                        <Heading lightText={lightText}> {headLine} </Heading>
                        <SubTitle darkText={darkText}> {description} </SubTitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
            </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection;
