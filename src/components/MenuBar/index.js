import React from 'react'
import { Home, Search, ArrowUp, Moon, Grid } from 'styled-icons/feather'

import * as S from './styles'

const MenuBar = () => (
    <S.MenuBarWrapper>

        <S.MenuBarGroup>
            <S.MenuBarLink to="/" title="Voltar para página inicial">
                <S.MenuBarItem>
                    <Home />
                </S.MenuBarItem>
            </S.MenuBarLink>

            <S.MenuBarLink to="/search" title="Pesquisar">
                <S.MenuBarItem>
                    <Search />
                </S.MenuBarItem>
            </S.MenuBarLink>
        </S.MenuBarGroup>

        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema">
                <Moon />
            </S.MenuBarItem>
            <S.MenuBarItem title="Mudar visualização">
                <Grid />
            </S.MenuBarItem>
            <S.MenuBarItem title="Ir para o topo">
                <ArrowUp />
            </S.MenuBarItem>
        </S.MenuBarGroup>

    </S.MenuBarWrapper>
)

export default MenuBar


