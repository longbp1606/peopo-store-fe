import { theme } from "@/themes";
import { Image, Typography } from "antd";
import styled, { css } from "styled-components";

const { Text } = Typography;

export const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 3rem 0;
`;

export const AboutContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`;

export const AboutTitle = styled(Text)`
    color: ${theme.colors.primary};
    font-size: 3em;
    font-weight: 700;
`;

export const AboutDescription = styled(Text)`
    color: ${theme.colors.textPrimary};
`;

export const ImageArea = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageHolder = styled.div``;

export const ImageHolderBase = css`
    overflow: hidden;
    border-radius: 100%;
    border: 3px solid ${theme.colors.primary};
`;

export const ImageHolderMain = styled.div`
    ${ImageHolderBase}

    width: 300px;
    height: 300px;
    position: relative;
    z-index: 1;
`;

export const ImageMain = styled(Image)``;

export const ImageHolderSub1 = styled.div`
    ${ImageHolderBase}

    width: 150px;
    height: 150px;
    z-index: 0;
    
    position: relative;
    top: -5em;
    left: -4em;
`;

export const ImageHolderSub2 = styled.div`
    ${ImageHolderBase}

    width: 200px;
    height: 200px;
    z-index: 2;
    
    position: relative;
    top: -20em;
    left: 15em;
`;

export const ImageContainerSub = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & .ant-image {
        height: 100%;
        width: auto;
    }

    & .ant-image-img {
        height: 100%;
        width: auto;
    }
`;

export const ImageSub = styled(Image)``;