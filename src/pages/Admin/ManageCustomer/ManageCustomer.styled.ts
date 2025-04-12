import { theme } from "@/themes";
import { Flex, Table } from "antd";
import styled from "styled-components";

export const ManageCustomerWrapper = styled(Flex)`
    width: 100%;
    gap: 20px;
    // height: calc(100vh - 160px);

    & h3.ant-typography {
        color: ${theme.colors.primary}
    }
`;

export const HeaderWrapper = styled(Flex)`
    width: 100%;
    justify-content: space-between;
    align-items: center;

    & h3.ant-typography {
        color: ${theme.colors.primary};
        width: 100%;
    }
`;

export const ModalTable = styled(Table)`
    margin-top: 16px;
    
    .ant-table {
        border-radius: 8px;
        overflow: hidden;
    }
    
    .ant-table-thead > tr > th {
        background-color: ${theme.colors.lightPrimary};
        color: ${theme.colors.textPrimary};
        font-weight: 600;
    }
    
    .ant-table-tbody > tr > td {
        padding: 8px 16px;
    }
    
    .ant-table-tbody > tr:hover > td {
        background-color: rgba(65, 218, 241, 0.05);
    }
    
    .ant-pagination {
        margin: 12px 0;
    }
`;