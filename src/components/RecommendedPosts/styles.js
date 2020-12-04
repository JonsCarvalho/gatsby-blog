import styled from 'styled-components'
import { Link } from 'gatsby'

export const RecommendedWrapper = styled.section`
    border-bottom: 1px solid #5c04b5;
    border-top: 1px solid #5c04b5;
    background: #1b1324;
    display: flex;
`

export const RecommendedLink = styled(Link)`
    align-items: center;
    background: #1b1324;
    color: #1fa;
    display: flex;
    padding: 3rem;
    text-decoration: none;
    transition: background 0.5s;
    width: 50%;

    &:hover{
        background: #38444d;
    }

    &.previous{
        border-right: 1px solid #5c04b5;
    }

    &.next{
        justify-content: flex-end;
    }

    &.previous:before{
        content: "\\2190";
        margin-right: 0.5rem;
    }

    &.next:after{
        content: "\\2192";
        margin-left: 0.5rem;
    }


`
