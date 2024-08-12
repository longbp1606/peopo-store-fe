import * as Styled from './Logo.styled';

type LogoProps = {
    to: string;
    role?: string;
}

const Logo = ({ to }: LogoProps) => {
    return (
        <>
            <Styled.LogoWrapper to={to}>
                <Styled.LogoTitle>
                    Peopo Store
                </Styled.LogoTitle>
            </Styled.LogoWrapper>
        </>
    )
}

export default Logo;