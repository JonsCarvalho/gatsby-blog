import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../avatar'
import * as S from './styles'

const Profile = () => {
    const {
        site: {
            siteMetadata: { position, author, description }
        }
    } = useStaticQuery(
        graphql`
            query MyQuery {
                site {
                    siteMetadata {
                        author
                        position
                        description
                    }
                }
            }`
    )

    return (
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar />
                <S.ProfileAuthor>
                    {author}
                    <S.ProfilePosition>{position}</S.ProfilePosition>
                </S.ProfileAuthor>
            </S.ProfileLink>
            <S.ProfileDescription>{description}</S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile