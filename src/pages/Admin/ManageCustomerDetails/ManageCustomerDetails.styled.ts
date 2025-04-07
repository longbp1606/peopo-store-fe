import { theme } from "@/themes";
import { Flex } from "antd";
import styled from "styled-components";

export const ManageCustomerDetailsWrapper = styled(Flex)`
    width: 100%;
    gap: 20px;
    height: calc(100vh - 160px);

    & h3.ant-typography {
        color: ${theme.colors.primary}
    }
`;

export const CustomerInfoCard = styled(Flex)`
    width: 100%;
    padding: 20px;
    border-radius: 8px;
`;