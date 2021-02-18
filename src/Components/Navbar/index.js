//rafce
import React, {useState, useEffect} from 'react';
//npm install react-icons
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { animatedScroll as scroll } from 'react-scroll';
import {Nav, NavbarContainer, NavLinks, NavLogo, MobileIcon, NavMenu, NavItem, NavBtn, NavBtnLink} from './NavbarElements';

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
                    <NavLogo to="/" onClick={toggleHome}>.is()</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                       <NavMenu>
                           <NavItem>
                               <NavLinks to='about'
                               smooth={true} duration={500} spy={true} exact='true' offset= {-80}> .about() </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='resume'
                                smooth={true} duration={500} spy={true} exact='true' offset= {-80}> .toResume() </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='projects'
                                smooth={true} duration={500} spy={true} exact='true' offset= {-80}> .toProjects() </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='skills'
                                smooth={true} duration={500} spy={true} exact='true' offset= {-80}> .education() </NavLinks>
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
