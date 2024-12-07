import { theme } from "@/themes";
import { Flex } from "antd";
import styled from "styled-components";

export const ManageCustomerWrapper = styled(Flex)`
    width: 100%;
    gap: 20px;
    height: calc(100vh - 160px);

    & h3.ant-typography {
        color: ${theme.colors.primary}
    }
`;