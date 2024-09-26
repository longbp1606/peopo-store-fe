import { theme } from "@/themes";
import { Flex } from "antd";
import styled from "styled-components";

export const ProfileWrapper = styled.div`
    & h3.ant-typography {
        color: ${theme.colors.primary};
    }
`;

export const AvatarContainer = styled(Flex)`
    padding: 24px 28px;
    background-color: ${theme.colors.lightPrimary};
    border-radius: 20px;

    & span.ant-typography {
        color: ${theme.colors.textSecondary};
        text-align: center;
    }
`;