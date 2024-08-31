import Banner1 from '@/assets/example/banner/HLID_8m_gakuensai_EN_main.webp';
import Banner2 from '@/assets/example/banner/PC_Banner_holo_CARDGAME_EN.webp';
import Banner3 from '@/assets/example/banner/bnr_ec_talent_all_625_352.webp';
import Banner4 from '@/assets/example/banner/holo_Ceres_Fauna_3rd_EN_240820_1.webp';
import * as Styled from './Banner.styled';
import Container from "@/components/Container";

const Banner = () => {
    return (
        <Container>
            <Styled.BannerWrapper arrows>
                <Styled.BannerImageHolder>
                    <Styled.BannerImage src={Banner1} preview={false}/>
                </Styled.BannerImageHolder>
                <Styled.BannerImageHolder>
                    <Styled.BannerImage src={Banner2} preview={false}/>
                </Styled.BannerImageHolder>
                <Styled.BannerImageHolder>
                    <Styled.BannerImage src={Banner3} preview={false} />
                </Styled.BannerImageHolder>
                <Styled.BannerImageHolder>
                    <Styled.BannerImage src={Banner4} preview={false} />
                </Styled.BannerImageHolder>
            </Styled.BannerWrapper>
        </Container>
    )
}

export default Banner