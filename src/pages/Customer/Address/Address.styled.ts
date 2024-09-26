import { theme } from "@/themes";
import styled from "styled-components";

export const AddressWrapper = styled.div`
    & .ant-row {
        padding: 24px 28px;
        margin-bottom: 2em;
        border-radius: 10px;
        box-shadow: 2px 2px 10px ${theme.colors.shadowForm};
    }

    & .ant-btn {
        padding: 20px;
    }
`;