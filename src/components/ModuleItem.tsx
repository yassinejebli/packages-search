import React from 'react';
import styled from 'styled-components';
import {theme} from "../theme/theme";
import Tag from "./Tag";
import {numFormatter} from "../utils/Utils";
import {ModuleModel} from "../models/ModuleModel";
import { ReactComponent as StarIcon } from "../assets/icons/star.svg";

const {opacity, padding,  margin, fontWeight, fontSize, color} = theme;

const ModuleItem = ({name,
                      description,
                      keywords,
                      owner,
                      stars,
                      homepage,
                      repositoryURL,
                      className}: ModuleModel&React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <Wrapper className={className}>
            <a href={repositoryURL} target="_blank" data-testid="module-item-url">
                <Title>{name}</Title>
            </a>
            <HomePage href={homepage}>
                {homepage}
            </HomePage>
            <Description>
                {description}
            </Description>
            <KeywordsWrapper>
                {keywords.map(k=><Tag key={k} text={k} />)}
            </KeywordsWrapper>
            <Owner>
                {owner}
            </Owner>
            <Stars>
                <StyledStarIcon />
                <StarsText>
                    {numFormatter(stars)}
                </StarsText>
            </Stars>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding-bottom: ${padding.l};
    border-bottom: 1px solid ${color.lightGray3};
`;

const Title = styled.div`
    font-weight: ${fontWeight.bold};
    color: ${color.lightBlue2};
    font-size: ${fontSize.l};
`;

const HomePage = styled.a.attrs({
    target: '_blank'
})`
    margin-top: ${margin.l};
    color: ${color.lightBlue};
    font-size: ${fontSize.s};
`;

const Description = styled.div`
    margin-top: ${margin.l};
    color: ${color.lightGray2}
`;

const Owner = styled.div`
    margin-top: ${margin.l};
    font-weight: ${fontWeight.medium};
    font-size: ${fontSize.m};
`;

const StyledStarIcon = styled(StarIcon)`
    height: 16px;
    width: 16px;
`;

const StarsText = styled.div`
    font-size: ${fontSize.s};
    margin-left: ${margin.xs};
    margin-top: 1.4px;
`;

const Stars = styled.div`
    display: flex;
    margin-top: ${margin.xs};
    opacity: ${opacity.l};
`;

const KeywordsWrapper = styled.div`
    margin-top: ${margin.m};
    display: flex;
    flex-wrap: wrap;
    
    &>span{
      margin-top: ${margin.xs};
    }
`;

export default ModuleItem;
