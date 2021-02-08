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
                        .about()
                    </SidebarLink>
                    <SidebarLink to='resume' onClick={toggle}>
                        .toResume()
                    </SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>
                        .toProjects()
                    </SidebarLink>
                    <SidebarLink to='sign-up' onClick={toggle}>
                        .toEducation()
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
