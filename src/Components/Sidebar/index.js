import React from 'react'
import {SidebarContainer, CloseIcon, Icon, SidebtnWrap, SidebarRoute, SidebarLink, SidebarWrapper, SidebarMenu} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='sign-up' onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SidebtnWrap>
                    <SidebarRoute to = '/signin'>Sign In</SidebarRoute>
                </SidebtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
