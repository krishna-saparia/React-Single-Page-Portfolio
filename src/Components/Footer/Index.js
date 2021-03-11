import React from 'react'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialIconLink, SocialLogo, WebsiteRights, SocialIcons } from './FooterElement'
import {FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaDownload} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Krishna Saparia</SocialLogo>
                        <WebsiteRights href='https://drive.google.com/file/d/1-gxvIs8lJkI7Za0pSv6lWnTy_Qg756wZ/view?usp=sharing/' target="_blank" aria-label="Facebook"> Resume <FaDownload/></WebsiteRights>
                        
                        <SocialIcons>
                            <SocialIconLink href='https://www.linkedin.com/in/krishna-s-99b575162/' target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/krishna-saparia' target="_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/kriss_saparia/' target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='https://www.facebook.com/krishna.saparia.56/' target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
            
        </FooterContainer>
        </div>
    )
}

export default Footer
