import { theme } from "@/themes";
import { Button, Image, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const ProductWrapper = styled.div`
    width: 100%;
    margin: 10px 0;
`;

export const ProductContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ProductElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 22%;
`;

export const ProductName = styled(Text)`
    color: ${theme.colors.primary};
    font-weight: 600;
    font-size: 1.5em;
`;

export const ProductImageHolder = styled.div`
    overflow: hidden;
    border-radius: 20px;
`;

export const ProductImage = styled(Image)`
    width: 100%;
`;

export const ProductPrice = styled(Text)`
    font-size: 1.5em;
    font-weight: 500;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const MoreButton = styled(Button)`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 2rem;
    margin: 2rem 0;
`;