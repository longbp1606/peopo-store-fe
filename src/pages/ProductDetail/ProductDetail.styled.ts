import { theme } from "@/themes";
import { Button, Flex, Image, Tag } from "antd";
import styled from "styled-components";

export const ProductWrapper = styled.div`
    margin: 2em 0;
`;

export const ImageHolderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ImageHolderMain = styled.div``;

export const ImageHolderSub = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.4rem;

    & .ant-image {
        width: 18%;
    }
`;

export const ImageMain = styled(Image)``;

export const ImageSub = styled(Image)``;

export const ProductContainer = styled.div`
    padding: 0 2em;
`;

export const ProductTag = styled(Tag)`
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    background: ${theme.colors.lightPrimary};
    padding: 5px 10px;
    margin-bottom: 2rem;
`;

export const ProductCategory = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoryGroupButton = styled(Flex)`

`;

export const CategoryButton = styled(Button)`
    font-size: 2rem;
    font-weight: 700;
    color: ${theme.colors.textSecondary};
    padding: 3rem;
    width: 100%;
    transition: ${theme.transition.primary};
`;