import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #101522;
    
    @media screen and (max-width: 768px) {
        margin: 200px 0 0 0;
        padding: 0 0 15px 0;
    }
    `

export const FooterWrap = styled.div`
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto ;
    `

// export const FooterLinksContainer = styled.div`
//     display: flex;
//     justify-content: center;
    
//     @media screen and (max-width: 820px) {
//         padding-top: 32px;
//     }`

// export const FooterLinkWrapper = styled.div`
//     display: flex;
    
//     @media screen and (max-width: 820px) {
//         flex-direction: column;
//     }`

// export const FooterLinkItems = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: cemter;
//     maregin: 16px;
//     text-align: left;
//     width: 160px;
//     box-sizing: border-box;
//     color: #fff;
    
//     @media screen and (max-width: 420px) {
//         margin: 0;
//         padding: 10px;
//         width: 100%;
//     }`

// export const FooterLinkTitle = styled.h1`
//     font-size:14px;
//     margin-bottom: 16px;
//     color: #fff;
//     text-decoration: none;
    
//     &:hover {
//         color: #01bf71;
//         transition: 0.3s ease-out;
//     }`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    margin-bottom: 10px; 
    `

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
    padding: 0 15px 0 15px;
    
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    `

export const WebsiteRights = styled.a`
    color: #fff;
    margin-bottom: 16px;
    font-size: 1.5rem;
    font-weight: 400px;
    text-decoration: none;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    `;