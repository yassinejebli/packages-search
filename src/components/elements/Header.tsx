import React from 'react';
import styled from 'styled-components';
import {theme} from "../../theme/theme";

const logoPath = process.env.PUBLIC_URL + '/assets/images/logo.svg';
const {margin, padding, fontWeight, fontSize, color, backgroundColor, opacity} = theme;

const Header = () => {
    return (
        <Wrapper>
            <MenuItemsWrapper>
                <MenuItem>Docs</MenuItem>
                <MenuItem active>Search modules</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Stats</MenuItem>
            </MenuItemsWrapper>
            <LogoTitleWrapper>
                <Logo />
                <div>
                    <Title>BLABLA Search</Title>
                    <SubTitle>Powered by blabla</SubTitle>
                </div>
            </LogoTitleWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    background-color: #ffcc2f;
    padding: ${padding.l} ${padding.xl} ${padding.xl} ${padding.l};
`;

const MenuItemsWrapper = styled.div`
    display: flex;
    width: fit-content;
    margin-left: auto;
    
    @media (max-width: 768px){
        margin-left: 0;
        justify-content: space-between;
        width: 100%;
    }
`;

const MenuItem = styled.div`
    margin-left: ${margin.m};
    font-weight: ${fontWeight.bold};
    cursor: pointer;
    user-select: none;
    color: ${(props: {active?:boolean})=>props.active?color.lightBlue:color.lightGreen};
    padding: ${padding.xs} ${padding.m};
    border-radius: 4px;
    
    &:hover{
      background-color: ${backgroundColor.white};
    }
    
      @media (max-width: 768px){
        font-size: ${fontSize.m};
    }
`;

const Title = styled.div`
    opacity: ${opacity.l};
    font-weight: ${fontWeight.bold};
    font-size: 48px;
    margin-left: ${margin.l};
    
    @media (max-width: 768px){
        font-size: 24px;
        margin-left: ${margin.s};
    }
`;

const Logo = styled.img.attrs({
    src: logoPath
})`
    height: 90px;
    
    @media (max-width: 768px){
        height: 32px;
    }
`;

const LogoTitleWrapper = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top: ${margin.l};
     
     @media (max-width: 768px){
        justify-content: start;
    }
`;

const SubTitle = styled(Title)`
    font-size: ${fontSize.m};
    
    @media (max-width: 768px){
        display: none;
    }
`;

export default Header;
