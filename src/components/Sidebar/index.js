import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {


    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="featured" onClick={toggle}>
                        Featured
                    </SidebarLink>
                    <SidebarLink to="offers" onClick={toggle}>
                        Offers
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact Us
                    </SidebarLink>
                    <SidebarLink to="signin" onClick={toggle}>
                        Sign In
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar