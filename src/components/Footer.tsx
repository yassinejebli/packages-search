import React from 'react';
import styled from 'styled-components';
import {theme} from "../theme/theme";

const {padding, margin, fontSize, color} = theme;

const Footer = () => {
    return (
        <>
            <Wrapper>
                <Section>
                    <Header>Help</Header>
                    <Link>Documentation</Link>
                    <Link>Community</Link>
                    <Link>Resources</Link>
                    <Link>Advisories</Link>
                </Section>
                <Section>
                    <Header>About</Header>
                    <Link>Company</Link>
                    <Link>Blog</Link>
                    <Link>Careers</Link>
                    <Link>Webinars</Link>
                </Section>
                <Section>
                    <Header>Terms & Policies</Header>
                    <Link>Policies</Link>
                    <Link>Terms of Use</Link>
                    <Link>Code of Conduct</Link>
                </Section>
            </Wrapper>
            <GradientBg />
        </>
    );
};

const Wrapper = styled.footer`
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    margin: ${margin.l} auto;
    border-top: 1px solid ${color.lightGray3};
    @media (max-width: 768px){
      flex-direction: column;
    }

`;

const Header = styled.h3`

`;

const Link = styled.a`
    margin-top: ${margin.m};
    display: block;
    cursor: pointer;
    font-size: ${fontSize.l};
    
`;

const Section = styled.div`
    padding: ${padding.l};
    width: 30%;
    @media (max-width: 768px){
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`;

const GradientBg = styled.div`
    height: 10px;
    background-image: linear-gradient(140deg, #6CFB95, #FFA816, #35ADC1, #1583FF);
`;

export default Footer;
