import React from "react"
import PropTypes from "prop-types"
import Sidebar from "../sidebar"
import MenuBar from "../menuBar"

import * as S from './styles'
import GlobalStyles from '../../styles/global'


const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <MenuBar />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
