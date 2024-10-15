import { theme } from "@/themes";
import { Flex } from "antd";
import styled from "styled-components";

export const DashboardWrapper = styled(Flex)`
    width: 100%;
    gap: 20px;

    & h1.ant-typography {
        color: ${theme.colors.primary};
    }
`;

export const AnalyticWrapper = styled(Flex)`
    gap: 10px;
    justify-content: space-between;
`;

export const AnalyticContainer = styled(Flex)`
    width: 25%;
    gap: 15px;
    padding: 12px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    & span.ant-typography {
        text-transform: uppercase;
        font-weight: 600;
        color: ${theme.colors.textSecondary}
    }

    & h3.ant-typography {
        margin: 0;
    }

    & .ant-flex {
        color: ${theme.colors.textSecondary};

        & .ant-tag {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
`;

export const AnalyticDataContainer = styled(Flex)`
    gap: 10px;
`;

export const ChartAndOrderWrapper = styled(Flex)`
    gap: 10px;
`;

export const OrderWrapper = styled(Flex)`
    padding: 12px 24px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 10px;
    width: 40%;

    & h4.ant-typography {
        margin-bottom: 10px;
    }
`;

export const ChartWrapper = styled(Flex)`
    padding: 12px 24px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 10px;
    width: 60%;
`;

export const CustomerWrapper = styled(Flex)`
    width: 100%;
    padding: 12px 24px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    border-radius: 10px;
`;