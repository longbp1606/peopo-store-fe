import { theme } from "@/themes";
import { Row, Typography } from "antd";
import styled from "styled-components";

export const FooterSection = styled.footer`
    padding: 60px 0;
    background: ${theme.colors.divider};
`;

export const AboutShopSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ShopSlogan = styled(Typography.Text)`
    color: ${theme.colors.primary};
    font-style: italic;
`;

export const AboutShopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
    color: ${theme.colors.textSecondary}
`;

export const AboutShopElement = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const FooterColumnWrapper = styled.div`
    & h3.ant-typography {
        color: ${theme.colors.textPrimary};
    }
    
    & li.ant-list-item {
        padding: 0 0 20px 0;
        border: none;

        & a {
            color: ${theme.colors.textSecondary};
            font-size: 1.6rem;
            font-weight: 400;
            text-align: left;
            
            &:hover {
                color: ${theme.colors.black};
            }
        }
    }
`;

export const FooterRow = styled(Row)`
    ${({ theme }) => theme.breakpoints.down('md')} {
        flex-direction: column-reverse;
    };
`;

export const FooterCopyright = styled.div`
    margin-top: 40px;

    & span.ant-typography {
        color: ${theme.colors.textPrimary};
        font-size: 1.6rem;
        font-weight: 400;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        margin-top: 20px;
        text-align: center;
    }
`;

export const FooterSocial = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    column-gap: 32px;
    margin-top: 40px;

    & a {
        display: flex;
        padding: 8px;
        color: ${theme.colors.textPrimary};
        border: 1px solid ${theme.colors.textPrimary};
        border-radius: 100%;
        transition: ${theme.transition.primary};

        & svg {
            transition:  ${theme.transition.primary};
        }

        &:hover {
            border-color: ${theme.colors.primary};
        }

        &:hover svg {
            color: ${theme.colors.primary};
        }
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
        justify-content: center;
        margin-top: 60px;
    }
`;