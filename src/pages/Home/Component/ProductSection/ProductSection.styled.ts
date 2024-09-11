import { theme } from "@/themes";
import { Image, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const ProductWrapper = styled.div`
    width: 100%;
    margin: 10px;
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