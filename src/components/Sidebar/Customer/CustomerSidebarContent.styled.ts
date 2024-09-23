import { theme } from "@/themes";
import { Flex } from "antd";
import styled from "styled-components";

export const CustomerSidebarContentWrapper = styled.div`
    & .ant-space-item {
        background-color: transparent;
        transition: ${theme.transition.primary};

        &:hover {
            background-color: ${theme.colors.lightPrimary};
        }
    }
`;

export const SidebarItem = styled(Flex) <{ path: string, to: string }>`
    padding: 12px 28px;
    ${(props) => props.path === props.to ?
        `
            color: ${theme.colors.primary};
            background-color: ${theme.colors.lightPrimary};
            border-right: 2px solid ${theme.colors.primary};
        ` : ``}
`;