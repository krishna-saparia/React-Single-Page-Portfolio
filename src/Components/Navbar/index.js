//rafce
import React, {useState, useEffect} from 'react';
//npm install react-icons
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animatedScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLinks, NavLogo, MobileIcon, NavMenu, NavItem, NavBtn, NavBtnLink, NavLinkIcon, Avatar} from './NavbarElements';
import a1 from '../../images/a1.png'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                
                    <NavLogo to="/" onClick={toggleHome}> <Avatar src = {a1}></Avatar>Krishna.is()</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                       <NavMenu>
                       <NavItem>
                                <NavLinkIcon href='https://drive.google.com/file/d/1-gxvIs8lJkI7Za0pSv6lWnTy_Qg756wZ/view?usp=sharing/' target="_blank" aria-label="Resume">.toResume()</NavLinkIcon>
                            </NavItem>
                           <NavItem>
                               <NavLinks to='about'
                               smooth={true} duration={500} spy={true} exact='true' offset= {-80}> .about() </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='education'
                                smooth={true} duration={500} spy={true} exact='true' offset= {-80}> .toEducation() </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='projects'
                                smooth={true} duration={500} spy={true} exact='true' offset= {-80}> .toProjects() </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='skills'
                                smooth={true} duration={500} spy={true} exact='true' offset= {-80}> .toSkills() </NavLinks>
                            </NavItem>
                       </NavMenu>
                        {/* <NavBtn>
                            <NavBtnLink to='sign-in'>Sign-In</NavBtnLink>
                        </NavBtn> */}
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
