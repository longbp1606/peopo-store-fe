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

    & .ant-collapse {
        border: none;

        & .ant-collapse-item {
            border-color: ${theme.colors.divider};

            & span {
                font-weight: 600;
            }
            
            & .ant-collapse-content-box {
                color: ${theme.colors.textSecondary};
            }
        }
    }

    & .ant-typography {
        color: ${theme.colors.textSecondary};
    }
`;

export const ImageHolderMain = styled.div`
    transition: ${theme.transition.primary};
`;

export const ImageHolderSub = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.4rem;
    transition: ${theme.transition.primary};

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


export const ProductElementContainer = styled.div`       
    & .ant-row {
        box-shadow: 0 2px 10px ${theme.colors.shadowForm};
        margin-bottom: 2rem;
        padding: 15px 20px;
        border-radius: 10px;
    }

    & span.ant-typography {
        font-size: 2rem;
        font-weight: 600;
        color: ${theme.colors.textSecondary}
    }

    & .ant-tag {
        margin-bottom: 1rem;
    }
`;

export const AddToCartSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProceedToCartButton = styled(Button)`
    width: 75%;
    padding: 25px;
    border-radius: 100px;

    & span {
        font-size: 2rem;
        font-weight: 600;
    }
`;