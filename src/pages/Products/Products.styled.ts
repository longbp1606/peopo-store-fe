import { theme } from "@/themes";
import { Image, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const ProductWrapper = styled.div``;

export const ProductElement = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 22%;
`;

export const ProductName = styled(Text)`
    color: ${theme.colors.primary};
    font-weight: 600;
    font-size: 1.5rem;
`;

export const ProductImageHolder = styled.div`
    overflow: hidden;
    border-radius: 20px;
`;

export const ProductImage = styled(Image)`
    width: 100%;
`;

export const ProductPrice = styled(Text)`
    font-size: 1.5rem;
    font-weight: 500;
`;