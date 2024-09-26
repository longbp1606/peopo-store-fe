import { theme } from "@/themes";
import styled from "styled-components";

export const VoucherWrapper = styled.div`
    & .ant-row {
        box-shadow: 5px 5px 10px ${theme.colors.shadowForm};
        border-radius: 15px;
        padding: 12px 25px;

        & .ant-col:nth-child(2) {
            & .ant-space-item:nth-child(3) {
                & span.ant-typography {
                    color: ${theme.colors.primary};
                }
            }
            
            & .ant-space-item:nth-child(4) {
                & span.ant-typography {
                    color: ${theme.colors.textSecondary};
                }
            }
        }
    }

    & h4.ant-typography {
        margin-bottom: 0px;
    }
`;

export const IconWrapper = styled.div`
    background-color: ${theme.colors.primary};
    width: 100px;
    height: 100px;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 5em;
`;