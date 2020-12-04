import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuBarWrapper = styled.aside`
    align-items: center;
    background: #1b1324;
    border-right: 1px solid #5c04b5;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 0.8rem 0;
    position: fixed;
    left: 20rem;
    width: 3.75rem;
`

export const MenuBarGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenuBarLink = styled(Link)`
    display: block;
`

export const MenuBarItem = styled.span`
    color: #8899a6;
    cursor: pointer;
    display: block;
    height: 3.75rem;
    width: 3.75rem;
    padding: 1.1rem;
    position: relative;
`