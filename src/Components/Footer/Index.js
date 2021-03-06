import React from 'react'
import {FooterContainer, FooterLinkWrapper, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialIconLink, SocialLogo, WebsiteRights, SocialIcons } from './FooterElement'
import {FaLinkedin, FaFacebook, FaGithub, FaInstagram, FaDownload} from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle to=''> LinkedIn </FooterLinkTitle>
                            <FooterLinkTitle to=''> Github </FooterLinkTitle>
                            <FooterLinkTitle to=''> Instgram </FooterLinkTitle>
                            <FooterLinkTitle to=''> Facebook </FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinksContainer> */}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Krishna Saparia</SocialLogo>
                        <WebsiteRights href='https://drive.google.com/file/d/1vL1N_WHi3qS8vAv7ynacovkLcYrK4ppL/view?usp=sharing/' target="_blank" aria-label="Facebook"> Resume <FaDownload/></WebsiteRights>
                        
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