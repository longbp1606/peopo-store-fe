import { theme } from "@/themes";
import { Carousel, Image } from "antd";
import styled from "styled-components";

export const ContainerWrapper = styled.div`
    width: 100%;
    height: 75vh;
    overflow: hidden;
`;

export const BannerWrapper = styled(Carousel)`
    .slick-list {
        overflow: unset;
    }

    .slick-arrow {
        background: #000;
        width: 40px;
        height: 40px;
        border-radius: 100%;
        
    }

    .slick-next {
        left: 98%;
    }

    .slick-prev {
        left: -1%;
    }
    
    .slick-next::after {
        width: 20px;
        height: 20px;
        top: 25%;
        left: 15%;
    }

    .slick-prev::after {
        width: 20px;
        height: 20px;
        top: 25%;
        left: 35%;
    }

    .slick-slide {
        opacity: 0.5;
    }

    .slick-active {
        opacity: 1;
    }

    .slick-dots li.slick-active button {
        background: ${theme.colors.primary};
    }

    .slick-dots li button {
        background: ${theme.colors.primary};
        height: 5px;
    }

    .slick-dots-bottom {
        bottom: -5px;
    }
`;

export const BannerImageHolder = styled.div`
    text-align: center;
`;

export const BannerImage = styled(Image)`
    width: 800px;
    height: 450px;
`;