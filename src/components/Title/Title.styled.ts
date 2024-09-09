import { theme } from "@/themes";
import styled from "styled-components";

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    text-align: center;
`;

export const Content = styled.h1`
    font-size: 3em;
    color: ${theme.colors.primary};
`;

export const LeftLineContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const LeftLineComponent = styled.div`
    width: 100%;
    height: 20px;
    border-radius: 0 20px 20px 0;
    background: ${theme.colors.primary};
`;

export const RightLineContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const RightLineComponent = styled.div`
    width: 100%;
    height: 20px;
    border-radius: 20px 0 0 20px;
    background: ${theme.colors.primary};
`;