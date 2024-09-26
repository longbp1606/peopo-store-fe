import { theme } from "@/themes";
import styled from "styled-components";

export const SectionWrapper = styled.div`
    width: 100%;
    padding: 24px 28px;
    border: 1px solid ${theme.colors.borderDefault};
    border-radius: 15px;
    transition: ${theme.transition.primary};

    & h2.ant-typography {
        color: ${theme.colors.primary};
    }
`;