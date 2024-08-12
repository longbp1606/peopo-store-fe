import { theme } from "@/themes";
import { Typography } from "antd";
import styled from "styled-components";
import Link from "../Link";

export const LogoWrapper = styled(Link)`
    display: flex;
    align-items: center;
    column-gap: 10px;
`;

export const LogoTitle = styled(Typography.Text)`
    font-family: "Pacifico", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 32px;
    color: ${theme.colors.primary};
`