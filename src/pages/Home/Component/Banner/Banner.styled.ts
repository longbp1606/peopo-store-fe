import { Carousel } from "antd";
import styled from "styled-components";

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
`;

export const BannerImageHolder = styled.div`
    text-align: center;
`;