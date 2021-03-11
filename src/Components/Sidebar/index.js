import React from 'react'
import {SidebarContainer, CloseIcon, Icon, SidebarLink, SidebarWrapper, SidebarMenu, SidebarItem} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarItem href='https://drive.google.com/file/d/1vL1N_WHi3qS8vAv7ynacovkLcYrK4ppL/view?usp=sharing/' target="_blank" aria-label="Resume">.toResume()</SidebarItem>
                    <SidebarLink to='about' onClick={toggle}>
                        .about()
                    </SidebarLink>
                    <SidebarLink to='education' onClick={toggle}>
                        .toEducation()
                    </SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>
                        .toProjects()
                    </SidebarLink>
                    <SidebarLink to='skills' onClick={toggle}>
                        .toSkills()
                    </SidebarLink>
                </SidebarMenu>
                {/* <SidebtnWrap>
                    <SidebarRoute to = '/signin'>Sign In</SidebarRoute>
                </SidebtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
