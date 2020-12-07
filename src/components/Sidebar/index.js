import React from 'react'
import * as S from './styles'
import Profile from '../profile'
import SocialLinks from '../socialLinks'
import MenuLinks from '../menuLinks'

const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile />
        <SocialLinks />
        <MenuLinks />
    </S.SidebarWrapper>
)

export default Sidebar