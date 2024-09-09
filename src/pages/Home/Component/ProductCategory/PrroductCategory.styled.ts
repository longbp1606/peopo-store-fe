import { theme } from "@/themes";
import { Image } from "antd";
import styled from "styled-components";


export const ProductCategoryWrapper = styled.div`
    width: 100%;
`;

export const SectionTitle = styled.div`
    text-align: center;
    margin: 20px 0;

    & .ant-typography {
        font-size: 3em;
        font-weight: 700;
    }    

    & .ant-typography:first-child:first-child {
        color: ${theme.colors.primary};
    }
`;

export const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const CategoryElement = styled.div`
    display: flex;
    flex-direction: column;

    & .ant-typography {
        text-align: center;
        font-size: 1.5em;
        line-height: 64px;
        font-weight: 600;
    }
`;

export const CategoryImageHolder = styled.div`
    width: 250px;
    overflow: hidden;
    border: 3px solid ${theme.colors.primary};
    border-radius: 10px;
`;

export const CategoryImage = styled(Image)`
    width: 100%;
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.3,1.3);
        z-index: 10;
    }
`;



