import { theme } from "@/themes";
import { Flex, Image } from "antd";
import styled from "styled-components";

export const DashboardWrapper = styled.div`
    width: 100%;
    padding: 24px 28px;
    border-radius: 15px;
    border: 1px solid ${theme.colors.borderDefault};
    
    & h2.ant-typography {
        color: ${theme.colors.primary};
        width: 100%;
    }

    & h3.ant-typography {
        color: ${theme.colors.primary};
    }
`;

export const ProfileSection = styled.div`
    width: 100%;
    background-color: ${theme.colors.lightPrimary};
    padding: 24px 28px;
    border-radius: 20px;
`;

export const ProfileSummary = styled(Flex)`

`;

export const AvatarHolder = styled.div`
    overflow: hidden;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 2px solid ${theme.colors.primary}
`;

export const AvatarImage = styled(Image)`
    width: 100%;
`;

export const ProfileDetail = styled.div`
    & span.ant-typography {
        color: ${theme.colors.textPrimary}
    }
`;

export const OrderSection = styled.div``;

export const AddressSection = styled.div`
    & .ant-row {
        padding: 24px 28px;
        margin-bottom: 2em;
        border-radius: 20px;
        box-shadow: 2px 2px 10px ${theme.colors.shadowForm};
    }

    & .ant-btn {
        padding: 20px;
    }
`;
